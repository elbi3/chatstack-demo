import express from "express";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, //configure manually later
});

//simple test routetry 
app.get("/api/medications", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM medications LIMIT 5");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            name: err.name || "Database Error",
            status: err.status || 500,
            message: err.message || "Something went wrong!",
            path: req.OriginalUrl,
            method: req.method
        })
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));