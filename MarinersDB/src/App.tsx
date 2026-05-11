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
      .then(res => {
        if(!res.ok) throw new Error("Network response error");
        return res.json();
      })
      .then(data => setRoster(data.roster))
      .catch(err => console.error("Errror fetching Mariners data"));
   }, []);
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Mariners Telemetry</h1>

      <div className="player-grid">
        {roster?.map((player => (
          <div key={player.person.id} className="player-card">
            <div>
              <span className="player-name">{player.person.fullName}</span>
              <div className="player-meta">
                UNIT_ID: {player.person.id} | POS: {player.position.abbreviation}
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="status-badge">Active</span>
              <div className="stativalue">.285</div>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}

export default App
