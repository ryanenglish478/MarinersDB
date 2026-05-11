const { Pool } = require('pg');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MarinersDB',
  password: 'optixmagseries',
  port: 5432,
});

async function getPlayerStats(playerId, isPitcher) {
  try {
    const group = isPitcher ? 'pitching' : 'hitting';

    const url =
      `https://statsapi.mlb.com/api/v1/people/${playerId}/stats` +
      `?stats=season&season=2025&group=${group}`;

    const response = await fetch(url);
    const data = await response.json();

    const splits = data.stats?.[0]?.splits;

    if (!splits || splits.length === 0) {
      return null;
    }

    return splits[0].stat;

  } catch (err) {
    console.error(`Stats fetch failed for ${playerId}`, err.message);
    return null;
  }
}

async function sync2025Roster() {
  try {
    console.log('Fetching Mariners 2025 roster...');

    const response = await fetch(
      'https://statsapi.mlb.com/api/v1/teams/136/roster?season=2025'
    );

    const data = await response.json();
    const roster = data.roster;

    console.log(`Found ${roster.length} players`);

    for (const p of roster) {
      const mlbId = p.person.id;
      const name = p.person.fullName;
      const position = p.position.abbreviation;

      const isPitcher = position === 'P';

      console.log(`Pulling stats for ${name}...`);

      const stats = await getPlayerStats(mlbId, isPitcher);

      let avg = null;
      let hr = null;
      let rbi = null;
      let era = null;
      let ip = null;
      let ks = null;

      if (stats) {
        if (isPitcher) {
          era = stats.era ? parseFloat(stats.era) : 0.00;
          ip = stats.inningsPitched
            ? parseFloat(stats.inningsPitched)
            : 0.0;
          ks = stats.strikeOuts
            ? parseInt(stats.strikeOuts)
            : 0;
        } else {
          avg = stats.avg
            ? parseFloat(stats.avg)
            : 0.000;

          hr = stats.homeRuns
            ? parseInt(stats.homeRuns)
            : 0;

          rbi = stats.rbi
            ? parseInt(stats.rbi)
            : 0;
        }
      }

      const values = [
        mlbId,
        name,
        isPitcher ? 'Pitcher' : 'Batter',
        avg,
        hr,
        rbi,
        era,
        ip,
        ks,
      ];

      await pool.query(
        `
        INSERT INTO player_stats
        (id, player_name, pos_group, avg, hr, rbi, era, ip, ks)

        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)

        ON CONFLICT (id)
        DO UPDATE SET
          player_name = EXCLUDED.player_name,
          pos_group = EXCLUDED.pos_group,
          avg = EXCLUDED.avg,
          hr = EXCLUDED.hr,
          rbi = EXCLUDED.rbi,
          era = EXCLUDED.era,
          ip = EXCLUDED.ip,
          ks = EXCLUDED.ks
        `,
        values
      );

      console.log(`[UPDATED] ${name}`);
    }

    console.log('Roster + stats sync complete.');

  } catch (err) {
    console.error('Sync Error:', err.message);

  } finally {
    await pool.end();
  }
}

sync2025Roster();