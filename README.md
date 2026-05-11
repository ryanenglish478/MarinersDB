# Seattle Mariners 2025 Stats Dashboard

A full-stack baseball analytics dashboard that displays 2025 Seattle Mariners player statistics using live MLB data, a PostgreSQL cloud database, a Node.js/Express backend API, and a React frontend.

This project was built to demonstrate full-stack software engineering skills including API integration, database design, backend development, cloud deployment, and frontend data visualization.

## Live Demo

Frontend: https://mariners-db.vercel.app/
Backend API: https://ryanenglishmarinersdb.onrender.com/api/players

---

## Features

- Displays 2025 Seattle Mariners hitters and pitchers
- Pulls player roster and statistics from the MLB Stats API
- Stores player data in a PostgreSQL cloud database (Neon)
- Custom Node.js synchronization script for populating/updating stats
- REST API backend built with Express
- React frontend dynamically fetches and displays live database data
- Cloud deployment for full public accessibility
- Cross-origin frontend/backend communication with CORS support

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv
- cors

### Cloud / Deployment
- Neon (PostgreSQL cloud database)
- Render (backend hosting)
- Vercel (frontend hosting)

### External APIs
- MLB Stats API

---

## Architecture

```text
User Browser
     ↓
React Frontend (Vercel)
     ↓
Express API (Render)
     ↓
PostgreSQL Database (Neon)
     ↓
MLB Stats API
```

---

## How It Works

1. A custom Node.js script connects to the MLB Stats API.
2. The script pulls the 2025 Seattle Mariners roster.
3. Additional API calls fetch player season statistics.
4. Player data is inserted/updated in PostgreSQL using MLB player IDs as primary keys.
5. Express exposes REST API endpoints for frontend consumption.
6. React fetches data from the backend API.
7. Player statistics are rendered dynamically in the dashboard UI.

---

## Database Schema

### player_stats

| Column Name | Type |
|-----------|------|
| id | INTEGER PRIMARY KEY |
| player_name | TEXT |
| pos_group | TEXT |
| avg | NUMERIC |
| hr | INTEGER |
| rbi | INTEGER |
| era | NUMERIC |
| ip | NUMERIC |
| ks | INTEGER |

---

## API Endpoints

### Get all players

```http
GET /api/players
```

Returns all Mariners players with batting/pitching stats.

Example response:

```json
[
  {
    "id": 660271,
    "player_name": "Julio Rodríguez",
    "pos_group": "Batter",
    "avg": "0.286",
    "hr": 12,
    "rbi": 41,
    "era": null,
    "ip": null,
    "ks": null
  }
]
```

---

## Local Development Setup

### Clone repository

```bash
git clone https://github.com/ryanenglish478/MarinersDB.git
cd MarinersDB
```

---

### Frontend setup

```bash
npm install
npm run dev
```

---

### Backend setup

```bash
cd server
npm install
node index.js
```

---

### Environment Variables

Backend `.env`

```env
DATABASE_URL=postgresql://neondb_owner:npg_gV4PBi0vCFNd@ep-solitary-art-akfcge1l-pooler.c-3.us-west-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require
```

---

## Deployment

Frontend deployed via:
- Vercel

Backend deployed via:
- Render

Database hosted via:
- Neon

---

## Future Improvements

- Add advanced stats (OPS, WAR, WHIP, ERA+)
- Add player profile pages
- Add sorting/filtering functionality
- Add player search
- Add historical season support
- Add automated scheduled stat syncing
- Improve mobile responsiveness
- Add loading states / error handling
- Add team comparison dashboards

---


## What This Project Demonstrates

This project demonstrates:

- Full-stack application development
- REST API design
- PostgreSQL database integration
- Cloud database migration
- Third-party API integration
- Backend data synchronization scripting
- React frontend state management
- Deployment to production cloud services
- CORS / frontend-backend communication
- Environment variable management

---

## Author

Built by Ryan English