import axios from "axios";

export default {
  // Gets all Quizs
  getQuizzes: function() {
    return axios.get("/api/quizzes");
  },
  // Gets the Quiz with the given id
  getQuiz: function(id) {
    return axios.get("/api/quizzes" + id);
  },
  // Deletes the Quiz with the given id
  deleteQuiz: function(id) {
    return axios.delete("/api/quizzes" + id);
  },
  // Saves a Quiz to the database
  saveQuiz: function(QuizData) {
    return axios.post("/api/quizzes", QuizData);
  }
};