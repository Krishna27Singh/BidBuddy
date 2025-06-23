require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(`CORS middleware active for ${req.method} ${req.url}`);
  next();
});


// Routes
app.use("/", require("./routes/authRoutes"));

// Server listening
const PORT = process.env.PORT || 8008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
