const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = 8008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
