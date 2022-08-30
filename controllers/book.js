const { query } = require("express");
const { listeners } = require("../models/book");
const Book = require("../models/book");

exports.createBook = async (req, res) => {
  try {
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
    // Filtering  query

    // 1 Filtering query  removeing extra fields
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 2 Adding $ sings in comparistions
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // JSON.parse(queryStr) ___ -----

    let query = Book.find();

    // 2) Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else query = query.sort("title");

    // 3) Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else query = query.select("-__v");

    // 4) Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) { 
      const totalCount = await Book.countDocuments();
      if (skip >= totalCount) console.log("this page is not exist");
    }

    const books = await query;
    // query.sort().select().skip().limit()

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
