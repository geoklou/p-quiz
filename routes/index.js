const router = require("express").Router();
const apiRoutes = require("./api/quiz");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
