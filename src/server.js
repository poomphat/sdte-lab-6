const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hell world!");
});

module.exports = app;
