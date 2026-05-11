import './App.css'
import { useEffect, useState } from 'react'

interface Player {
  person: {
    id: number;
    fullName: string;
  };
  position: {
    abbreviation: string;
  };
}

function App() {
   const [roster, setRoster] = useState<Player[]>([]);

   useEffect(() => {
    //Mariners Team ID is 136
    fetch('https://statsapi.mlb.com/api/v1/teams/136/roster')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => setRoster(data.roster))
      .catch(() => console.error("Error fetching data"));
  }, []);

  const pitchers = roster.filter(p => p.position.abbreviation === 'P');
  const batters = roster.filter(p => p.position.abbreviation !== 'P');
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Mariners Roster</h1>
      <section className="player-section">
        <h2 className="section-label">
          <span className="status-indicator"></span> Pitchers
        </h2> 
        <div className="player-grid">
          {pitchers.map(player=> (
            <div key={player.person.id} className="player-card">
              <div>
                <span className="player-name">{player.person.fullName}</span>
                <div className="player-meta">P</div>
              </div>
              <div style={{ textAlign: 'right'}}>
                <span className="status-badge">Active</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="player-section" style={{marginTop: '40px'}}>
          <h2 className="section-label">
            <span className="status-indicator"></span>Batters
          </h2>
          <div className="fleet-grid">
            {batters.map(player => (
              <div key={player.person.id} className="player-card">
                <div>
                  <span className="player-name">{player.person.fullName}</span>
                  <div className="player-meta">
                    {player.position.abbreviation}
                  </div>
                </div>
                <div style={{textAlign:'right'}}>
                  <span className="status-badge">Active</span>
                </div>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
}

export default App
