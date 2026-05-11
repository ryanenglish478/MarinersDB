import './App.css'
import { useEffect, useState } from 'react'

interface Player {
  player_id: number;
  player_name: string;
  pos_group: 'Pitcher' | 'Batter';
  avg?: string;
  hr?: number;
  rbi?: number;
  era?: string;
  ip?: number;
  ks?: number;
}

function App() {
  const [roster, setRoster] = useState<Player[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/players')
      .then(res => {
        if (!res.ok) throw new Error("Network response error");
        return res.json();
      })
      .then(data => setRoster(data))
      .catch(err => console.error("Error fetching SQL data:", err));
  }, []);

  // Filter and Sort Logic
  const pitchers = [...roster]
    .filter(p => p.pos_group === 'Pitcher')
    .sort((a, b) => (b.ip || 0) - (a.ip || 0));

  const batters = [...roster]
    .filter(p => p.pos_group === 'Batter')
    .sort((a, b) => (b.rbi || 0) - (a.rbi || 0));

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Mariners 2025</h1>
        <p>Source: Local PostgreSQL Database</p>
      </header>

      {/* PITCHERS SECTION */}
      <section className="player-section">
        <h2 className="section-label">
          <span className="status-indicator"></span> Pitching (Leader by IP)
        </h2> 
        <div className="player-grid">
          {pitchers.map(player => (
            <div key={player.player_id} className="player-card">
              <div className="player-info">
                <span className="player-name">{player.player_name}</span>
                <span className="status-badge">Active</span>
              </div>
              <div className="stats-display">
                <div className="stat-box"><small>ERA</small><span>{player.era}</span></div>
                <div className="stat-box"><small>IP</small><strong>{player.ip}</strong></div>
                <div className="stat-box"><small>K</small><span>{player.ks}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BATTERS SECTION */}
      <section className="player-section" style={{marginTop: '40px'}}>
        <h2 className="section-label">
          <span className="status-indicator"></span> Batting (Leader by RBI)
        </h2>
        <div className="player-grid">
          {batters.map(player => (
            <div key={player.player_id} className="player-card">
              <div className="player-info">
                <span className="player-name">{player.player_name}</span>
                <span className="status-badge">Active</span>
              </div>
              <div className="stats-display">
                <div className="stat-box"><small>AVG</small><span>{player.avg}</span></div>
                <div className="stat-box"><small>HR</small><span>{player.hr}</span></div>
                <div className="stat-box"><small>RBI</small><strong>{player.rbi}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;