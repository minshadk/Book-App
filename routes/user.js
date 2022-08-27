const express = require("express");

const userController = require("../controllers/user")
const protect = require("../middleware/authMiddleware")

const router = express.Router();

router
  .route("/")
  .post(userController.createUser)
//   .get(userController.getAllUsers);

router.route("/login").post(protect.protect,userController.logIn);

// router
//   .route("/:id")
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);
 
module.exports = router;
 