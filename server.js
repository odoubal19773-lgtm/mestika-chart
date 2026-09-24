const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🍓 Mestika Chart is running!");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "Mestika Chart",
    message: "Mestika backend is running 🍓"
  });
});

app.listen(PORT, () => {
  console.log(`Mestika Chart running on port ${PORT}`);
});
