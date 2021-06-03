const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// creating new data or products
app.get("/", (req, res) => {
  res.render("home");
});

// localhost
app.listen(3005, () => {
  console.log("APP IS LISTENING ON PORT 3005");
});
