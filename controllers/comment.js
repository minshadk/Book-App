const Comment = require("../models/comment");

exports.createComment = async (req, res) => {
  try {
    req.body.userId = req.user._id;
    const comment = await Comment.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        comment: comment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
    });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    console.log(comments);

    res.status(200).json({
      status: "success",
      results: comments.length,
      data: {
        comments,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(400);
      throw new Error("Please Enter a Valid comment");
    }
    if (comment.userId.toString() !== req.user._id.toString()) {
      // if (comment.userId !== req.user._id) {
      res.status(400);
      throw new Error("Please add a text field");
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        updatedComment,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(400);
      throw new Error("Please Enter a Valid comment");
    }
    console.log(comment.userId)
    console.log(`req.user._id = ${req.user._id}`)
    if (comment.userId.toString() !== req.user._id.toString()) {
      // if (comment.userId !== req.user._id) {
      res.status(400);
      throw new Error("Please add a text field");
    }

    await Comment.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "comment deleted successfully",
      data: null,
    });
  } catch (err) {
    console.log(err)
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
