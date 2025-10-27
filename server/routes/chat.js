// server/routes/chat.js
import express from "express";

const router = express.Router();

/**
 * Placeholder route for chatbot messages
 */
router.post("/", async (req, res) => {
  const { message } = req.body;

  // TODO: Connect to LLM API here
  console.log("User message:", message);

  // Simulated AI response
  res.json({ reply: `You said: "${message}" (AI response will go here)` });
});

export default router;
