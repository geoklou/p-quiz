const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quizzes"
router.route("/")
  .get(quizController.findAll)
  .post(quizController.create);

// Matches with "/api/quizzes/:id"
router
  .route("/:id")
  .get(quizController.findById)
  .put(quizController.update)
  .delete(quizController.remove);

// Matches with "/api/quizzes/saved"
router
.route("/saved")
.post(quizController.create);

module.exports = router;