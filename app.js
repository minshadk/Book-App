const express = require("express");

const userRoutes = require("./routes/user")
const bookRoutes = require("./routes/books")
const commentRoutes = require("./routes/comment")

const app = express();

// MIDDLEWARE
// Passing data through body
app.use(express.json());

// ROUTES
app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.use("/comment", commentRoutes);

module.exports = app;
