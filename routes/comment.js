const express = require("express");
const protect = require("../middleware/authMiddleware");

const comment = require("../controllers/comment");

const router = express.Router();

router
  .route("/")
  .post(protect.protect, comment.createComment)
  .get(comment.getAllComments);

router
  .route("/:id")
  .get(comment.getComment)
  .patch(protect.protect, comment.updateComment)
  .delete(protect.protect, comment.deleteComment);

router.route("/like/:id").put(protect.protect, comment.likeComment);

module.exports = router;
