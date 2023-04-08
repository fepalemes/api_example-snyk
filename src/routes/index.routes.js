const express = require("express");
const { healthCheck } = require("../controllers/health-check.controller");
const app = express.Router();

// Health-check endpoint
app.route("/api/health-check").get(healthCheck);

module.exports = app;

