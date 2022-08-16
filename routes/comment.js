const express = require("express");

const comment = require("../controllers/comment")

const router = express.Router()

router
  .route("/")
  .post(comment.createComment)
  .get(comment.getAllComments);

router
  .route("/:id")
  .get(comment.getComment)
  .patch(comment.updateComment)
  .delete(comment.deleteComment);

// router.route("/findDonare/:id").get(book.getDonorByCondition);

module.exports = router;
 
 