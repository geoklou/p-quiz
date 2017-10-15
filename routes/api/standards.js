const router = require("express").Router();
const standardController = require("../../controllers/standardControllers");

// Matches with "/api/quizzes"
router.route("/")
  .get(standardController.findAll)
  .post(standardController.create);

// Matches with "/api/quizzes/:id"
router
  .route("/:id")
  .get(standardController.findById)
  .put(standardController.update)
  .delete(standardController.remove);

// Matches with "/api/quizzes/saved"
router
.route("/saved")
.post(standardController.create);

module.exports = router;