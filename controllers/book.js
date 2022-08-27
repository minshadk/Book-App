const Book = require("../models/book");

exports.createBook = async (req, res) => {
  try {
    // console.log(req.body.user)
    req.body.userId = req.user._id;
    const book = await Book.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        book: book,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
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
  // console.log(req.body.user)
  // console.log(req.user)
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
