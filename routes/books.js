const express = require("express");

const book = require("../controllers/book")

const router = express.Router();

router
  .route("/")
  .post(book.createBook)
  .get(book.getAllBooks);

router
  .route("/:id")
  .get(book.getBook)
  .patch(book.updateBook)
  .delete(book.deleteBook);

// router.route("/findDonare/:id").get(book.getDonorByCondition);

module.exports = router;

