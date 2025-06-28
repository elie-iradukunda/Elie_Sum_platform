const express=require("express");
const cors=require("cors");
const pool =require('./db');


const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());



app.get('/api/time', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]); // sends { now: '2025-06-28T20:57:12.000Z' }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Database error");
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});