const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

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

db.once("open", () => {
  console.log("============================");
  console.log("Hey database is connected!!!");
});

// to generate a random element from the data of the descriptor and place
const sample = (array) => array[Math.floor(Math.random() * array.length)];

// to delete everything on the database
// 1000 is used because there are 1000 cities in the array
const seedDB = async () => {
  await Campground.deleteMany({});
  for (let index = 0; index < 50; index++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    });
    await camp.save();
  }
};

// to close the mongoose.connection
seedDB().then(() => {
  mongoose.connection.close();
});
