const router = require("express").Router();
const quizRoutes = require("./quiz");

// Book routes
router.use("/quizzes", quizRoutes);

module.exports = router;
