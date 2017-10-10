const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file inserts the questions below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/classroom",
  {
    useMongoClient: true
  }
);

const userSeed = [
    {


    }]

