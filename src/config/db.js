const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB Connection Successful");
  } catch (err) {
    console.log("Error Connecting to Database", err);
  }
};

module.exports = connectDB;
