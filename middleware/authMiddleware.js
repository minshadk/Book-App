const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.protect = async (req, res, next) => {
  console.log("auth midle ware is called");
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // fetching token from request
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.SECRET);
      // geting user from the token
      req.user = await User.findById(decoded._id);
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      // throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    // throw new Error("Not authroized ,no token");
    console.log("Not authroized ,no token");
  }
};

// module.exports = { protect };
