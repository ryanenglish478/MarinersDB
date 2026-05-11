const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Allows React to talk to this server

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/api/players', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.player_stats ORDER BY pos_group DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));