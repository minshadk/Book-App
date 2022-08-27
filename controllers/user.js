const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Creating a user Sing Up
exports.createUser = async (req, res) => {
  console.log(req.body);

  try {
    const newUser = await User.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      }, 
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
    });
  }
};

// Login In
exports.logIn = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({
      userName: userName, 
      password: password,
    });

    console.log(user);
    const createToken = (_id) => {
      return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
    };

    const token = createToken(user._id);

    res.status(201).json({
      message: "Login success full",
      status: "success",
      data: {
        userData: { token: token, userName: userName },
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

