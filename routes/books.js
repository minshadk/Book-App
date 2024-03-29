const express = require("express");

const book = require("../controllers/book");
const protect = require("../middleware/authMiddleware");

// router.route("/login").post(protect.protect,userController.logIn);

const router = express.Router();
router.route("/rate/:bookId").put(protect.protect, book.bookRating);

router.route("/").post(protect.protect, book.createBook).get(book.getAllBooks);

router
  .route("/:id")
  .get(book.getBook)
  .patch(book.updateBook)
  .delete(book.deleteBook);

 
module.exports = router;
