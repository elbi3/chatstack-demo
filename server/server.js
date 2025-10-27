import express from "express";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, //configure manually later
});

//simple test route try 
app.get("/api/medications", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM medications LIMIT 5");
        res.json(result.rows);
    } catch (err) {
        console.error("Error querying database:", err);
        res.status(500).send("Database error");
    }
});

app.listen(port, () => console.log(`Express server running on port ${port}`));