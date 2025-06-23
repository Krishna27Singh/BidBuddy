require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

const allowedOrigins = ['http://localhost:8080', 'https://www.omnidim.io'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log(origin);
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin); // Dynamically set the allowed origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
  
  // Handle OPTIONS preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});



app.use((req, res, next) => {
  console.log(`CORS middleware active for ${req.method} ${req.url}`);
  next();
});

app.use("/omni", (req, res) => {
  console.log("Request received on /omni:");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("Query Parameters:", req.query);
  console.log("Request Method:", req.method);
  res.status(200).send("API working fine");
});

// Routes
app.use("/", require("./routes/authRoutes"));

// Server listening
const PORT = process.env.PORT || 8008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
