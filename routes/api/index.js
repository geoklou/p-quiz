const router = require("express").Router();
const quizRoutes = require("./quiz");
const standardRoutes = require("./standard");

// routes
router.use("/quizzes", quizRoutes);
router.use("/standards", standardRoutes);

module.exports = router;
