const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String, required: true },
  question: { type: String, required: true },
  answer: 
  [{option: {type:String, required: true }, 
    text: {type: String, required: true }, 
    correct: {type: Boolean, required: true }}
  ],
  hint: {type:String, required: true },
  learning_std: {type:String, required: true },
  t_id: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;