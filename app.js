const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1/onyxCamp";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// creating new data or products
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

// localhost
app.listen(3005, () => {
  console.log("APP IS LISTENING ON PORT 3005");
});
