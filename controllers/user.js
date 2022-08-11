const User = require("../models/user");

// Creating a user Sing Up
exports.createUser = async (req, res) => {
  console.log(req.body)

    try {
      const newUser = await User.create(req.body);
      console.log(req.body)
      res.status(201).json({
        status: "success",
        data: {
          user: newUser
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "failed",
        message: "Invalid data send"
      });
    }
  };
  
  // Login In
  exports.logIn = async (req, res) => {
    try {
      const user = await User.findOne({
        userName: req.body.userName,
        password: req.body.password
      });
  
      res.status(201).json({
        message: "Login success full",
        status: "success",
        data: {
          user: user
        }
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "failed",
        message: "Invalid data send"
      });
    }
  };