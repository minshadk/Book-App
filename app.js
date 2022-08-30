const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/books");
const commentRoutes = require("./routes/comment");

const errorHandler = require("./middleware/errorMiddleware");
const app = express();

// MIDDLEWARE
// Passing data through body
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.use("/comment", commentRoutes);
app.use(errorHandler.errorHandler);

module.exports = app;
