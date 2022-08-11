const express = require("express");

const userRoutes = require("./routes/user")

const app = express();


// MIDDLEWARE
// Passing data through body
app.use(express.json());

// ROUTES
app.use("/user", userRoutes);

module.exports = app;
