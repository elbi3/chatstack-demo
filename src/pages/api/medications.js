import { Pool } from "pg";
import dotenv from "dotenv";
import { fallbackMedications } from "../../data/fallbackMedications";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM medications ORDER BY id ASC;");
    return new Response(JSON.stringify(result.rows), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("⚠️ Database unavailable, using fallback: ", err.message);
    return new Response(JSON.stringify(fallbackMedications), {
      headers: { "Content-Type": "application/json"},
    })
  }
}
