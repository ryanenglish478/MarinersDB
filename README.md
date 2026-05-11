# Mariners 2025 Stats Dashboard

A full-stack baseball statistics dashboard built using React, Node.js, PostgreSQL, and the MLB Stats API. This project displays live Seattle Mariners player statistics for the 2025 MLB season, including both hitters and pitchers.

## Features

- Displays 2025 Seattle Mariners roster and player statistics
- Separates hitters and pitchers into different stat tables
- Pulls live player data from the MLB Stats API
- Stores roster and stat data in a PostgreSQL database
- Uses a custom Node.js sync script to automatically populate/update database records
- React frontend dynamically retrieves and displays database data
- Responsive stat dashboard UI

---

## Tech Stack

### Frontend
- React
- JavaScript
- CSS

### Backend / Data
- Node.js
- Express.js
- PostgreSQL
- pg
- node-fetch

### APIs
- MLB Stats API

---

## How It Works

1. A Node.js synchronization script fetches the Seattle Mariners 2025 roster from the MLB Stats API.
2. The script then requests individual batting or pitching statistics for each player.
3. Player data is inserted or updated in a PostgreSQL database using UPSERT logic.
4. The React frontend pulls data from the database and renders player stat tables for users.

---

## Database Schema

### player_stats

| Column Name | Type |
|---|---|
| id | INTEGER |
| player_name | TEXT |
| pos_group | TEXT |
| avg | FLOAT |
| hr | INTEGER |
| rbi | INTEGER |
| era | FLOAT |
| ip | FLOAT |
| ks | INTEGER |

---

## Example Stats Displayed

### Hitters
- Batting Average
- Home Runs
- RBIs

### Pitchers
- ERA
- Innings Pitched
- Strikeouts

---

## Installation

### Clone Repository

```bash
git clone https://github.com/ryanenglish478/MarinersDB.git
cd MarinersDB
```

### Install Dependencies

```bash
npm install
```

### Configure PostgreSQL

Create a PostgreSQL database named:

```txt
MarinersDB
```

Create the `player_stats` table.

### Run Database Sync Script

```bash
node populate.js
```

### Start Frontend

```bash
npm start
```

---

## Future Improvements

- Public deployment using Vercel/Render
- Automatic scheduled stat syncing
- Advanced sabermetrics (OPS, WHIP, WAR)
- Player search/filter functionality
- Team comparison support
- Dark mode UI
- Mobile responsive optimization

---

## What I Learned

This project helped me gain hands-on experience with:
- REST API integration
- Backend data synchronization
- PostgreSQL database design
- React state management
- Full-stack application architecture
- SQL queries and UPSERT operations
- Deploying production-ready applications

---

## Author

Developed by Ryan English

GitHub: https://github.com/ryanenglish478