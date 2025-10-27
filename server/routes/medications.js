import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const router = express.Router();

// Database connection (reuse your connection string / env)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET /api/medications
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM medications ORDER BY id ASC;");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching medications:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

export default router;
