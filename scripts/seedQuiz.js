const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/classroom",
  {
    useMongoClient: true
  }
);
//inserts the questions below
const quizSeed = [
  {
    title: "Frequency, Amplitude and Wavelength",
    question: "In a given medium, if the frequency of a wave increases, its ",
    answer: [
        {option: "a", text:"Wavelength increases ", correct:false},
        {option: "b", text:"Speed increases ", correct:false},
        {option: "c", text:"Amplitude decreases ", correct:false},
        {option: "d", text:"Wavelength decreases ", correct:true},
    ],
    hint: "think about peaks and distance",
    learning_std: "AAAS 4F/M7",
    t_id: "59d7a5f9b94e43e515a9e13e",
    date: new Date(Date.now()),
  },
  {
    title: "Electromagnetic Waves",
    question: "The electromagnetic waves with the longest wavelengths are: ",
    answer:[
        {option: "a", text:"Radio waves ", correct:true},
        {option: "b", text:"Infrared rays ", correct:false},
        {option: "c", text:"X-rays ", correct:false},
        {option: "d", text:"Gamma rays ", correct:false},
    ],
    hint: "think about the rainbow, or the spectrum",
    learning_std: "AAAS 4F/M8",
    t_id: "59d7a5f9b94e43e515a9e13e",
    date: new Date(Date.now())
  },
];

db.Quiz
  // .remove({})
  .then(() => db.Quiz.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
