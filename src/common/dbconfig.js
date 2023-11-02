const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// const env = require('../../src/')
const uri = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;