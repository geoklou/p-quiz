const router = require("express").Router();
const apiRoutes = require("./api/quiz");
// const standardsRoutes = require("./api/standard");

// API Routes
router.use("/api", apiRoutes);
// router.use("/standards", standardsRoutes);

module.exports = router;
