const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// If using Node.js in CommonJS mode, fetch isn't globally available — so polyfill it:
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


exports.getBidSuggestion = async (req, res) => {
  try {
    const prompt = `
You are an AI-powered auction advisor for an online bidding platform called BidBuddy.

Your goal is to guide users who are new to bidding and want to increase their chances of winning auctions.

Provide:
1. General tips for bidding wisely in online auctions.
2. Common mistakes beginners make and how to avoid them.
3. Strategies like when to bid, how to manage budget, and how to read competitor behavior.
4. Advice on how to stay calm, avoid overbidding, and recognize patterns.
5. A few practical do’s and don’ts for successful bidding.

Write in clear, beginner-friendly language. Avoid technical terms. Make the suggestions easy to follow and confidence-boosting.
`.trim();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    console.log("Generated General Bidding Advice:", summary);
    res.json({ summary });
  } catch (error) {
    console.error("General bid suggestion generation failed:", error);
    res.status(500).json({ error: 'Failed to generate general bid suggestion' });
  }
};


