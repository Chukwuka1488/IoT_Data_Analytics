//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

const Campground = mongoose.model("Campground", campgroundSchema);

//Export function to create "SomeModel" model class
module.exports = Campground;
