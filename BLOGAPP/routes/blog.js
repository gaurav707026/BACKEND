const express = require("express");
const router = express.Router();

// import controller
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/postController");
const {likePost, unlikePost} = require("../controllers/LikeController");



// create mapping with url
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);



// export
module.exports = router;