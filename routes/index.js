const router = require("express").Router();
const apiRoutes = require("./api/quiz");
// const apiRoutes = require("./api/standard");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
