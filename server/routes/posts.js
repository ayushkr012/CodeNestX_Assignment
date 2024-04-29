import express from "express";
import {
  getFeedPosts,
  deletePost,
  createProduct,
  updatePost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
const postRoutes = express.Router();

/*Create Post */
postRoutes.post("/createPost", verifyToken, createProduct);

/* READ */
postRoutes.get("/", verifyToken, getFeedPosts);

/* Update Post */
postRoutes.put("/:postId/editPost", verifyToken, updatePost);

/*DELETE  Post */
postRoutes.delete("/:PostId", verifyToken, deletePost);

export default postRoutes;
