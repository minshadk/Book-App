const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    coverUrl: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      require: true,
    },
    isbn: {
      type: Number,
      required: true,
    },
    purchaseLink: {
      type: String,
      require: true,
    },
    rating: {
      // type: Number,
      type: Array,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true, // Add timestamps
  }
);

const BookSchema = mongoose.model("BookSchema", bookSchema);
module.exports = BookSchema;
