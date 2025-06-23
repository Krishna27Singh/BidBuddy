require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));


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
