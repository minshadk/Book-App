const Book = require("../models/book");

const ApiFeatures = require("../utils/apiFeatures");

exports.createBook = async (req, res) => {
  try {
    console.log(req.body);
    req.body.userId = req.user._id;
    const book = await Book.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        book: book,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const features = new ApiFeatures(Book.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const books = await features.query;
    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        // query,
        books,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "book deleted successfully",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.bookRating = async (req, res) => {
  try {
    console.log("book rating is called");
    const { bookId } = req.params;
    const userId = req.user._id;
    const { rating } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      res.status(404).json({ message: "Book not found" });
      return;
    }

    // Check if the user has already rated this book
    const existingRatingIndex = book.rating.findIndex(
      (r) => r.userId === userId
    );

    if (existingRatingIndex !== -1) {
      // Update the existing rating
      book.rating[existingRatingIndex].rating = rating;
    } else {
      // Create a new rating and push it to the array
      book.rating.push({ userId, rating });
    }

    // Save the updated book document
    await book.save();

    res.json({ message: "Rating submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
