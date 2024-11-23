const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Route untuk root URL (/)
app.get("/", (req, res) => {
  res.send("Welcome to Express.js API!");
});

// Contoh route dasar di /api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express.js API" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
