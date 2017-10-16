const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api", routes);
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/classroom",
  {
    useMongoClient: true
  }
);

// If no API routes are hit, send the React app
// app.use("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});