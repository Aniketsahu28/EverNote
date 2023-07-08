const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo successfully");
  });
};

module.exports = connectToMongo;
