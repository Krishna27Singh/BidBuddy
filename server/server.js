require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');


const app = express();

connectDB();

app.use(express.json());

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, 
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

app.use("/", require("./routes/authRoutes"));

const PORT = process.env.PORT || 8008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
