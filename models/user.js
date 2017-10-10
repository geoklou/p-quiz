var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Make LibrarySchema a Schema
var UserSchema = new Schema({
  // name: a unique string
  username: {
    type: String,
    trim: true,
    unique: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  // quizzes is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Quiz model
  // to link a quiz to a user (creator), rather than the ids,
  // using Mongoose's populate method (See the routes in Server.js)
  quizzes: [{
    type: Schema.Types.ObjectId,
    ref: "Quiz"
  }]
});

// Save the User model using the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the Library model
module.exports = User;