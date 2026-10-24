const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

app.use(helmet());
app.use(cors({
origin: process.env.FRONTEND_URL || "http://localhost:3000"
}));
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
res.json({
name: "Ajiraconnect",
message: "Ajiraconnect API is running",
environment: process.env.NODE_ENV || "development"
});
});

app.get("/api/health", (req, res) => {
res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
console.log("Ajiraconnect API running on port ${PORT}");
});
