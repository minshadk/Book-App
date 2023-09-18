const express = require("express");

const userController = require("../controllers/user")
const protect = require("../middleware/authMiddleware")

const router = express.Router();

router
  .route("/register")
  .post(userController.createUser)
//   .get(userController.getAllUsers);

router.route("/login").post(userController.logIn);

 
module.exports = router;
  