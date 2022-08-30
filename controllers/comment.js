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

exports.likeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(400);
      throw new Error("Please Enter a Valid comment");
    }

    if (!comment.likes.includes(req.user._id)) {
      await comment.updateOne({ $push: { likes: req.user._id } });
      res.status(200).json("the comment as been liked");
    } else {
      await comment.updateOne({ $pull: { likes: req.user._id } });
      res.status(200).json("the comment as been disliked");
    }
  } catch {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCommentByBookId = async (req, res) => {
  try {
    console.log(req.params.id);
    const comments = await Comment.find({ bookId: req.params.id });
    if (!comments) {
      res.status(400);
      throw new Error("Please Enter a Valid comments");
    }

    res.status(200).json({
      status: "success",
      data: {
        comments,
      },
    });
  } catch {
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
    if (comment.userId.toString() !== req.user._id.toString()) {
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
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
