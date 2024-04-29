import Product from "../models/Post.js";
import User from "../models/User.js";
import Admin from "../models/Admin.js";

/* CREATE Product */
export const createProduct = async (req, res) => {
  try {
    const { userId, description, imgUrl, videoUrl, productName } = req.body;

    // Check if the admin has uploaded a picture or video
    console.log("imageurl", imgUrl, "videourl", videoUrl);

    // const admin = await Admin.findById(userId);

    const newPost = new Product({
      userId,
      productName: productName ? productName : "",
      description: description.length > 0 ? description : "",
      imgUrl: imgUrl ? imgUrl : "",
      videoUrl: videoUrl ? videoUrl : "",
    });

    await newPost.save();

    const posts = await Product.find().sort({ _id: -1 });
    res.status(201).json(posts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

/* GET getFeedPosts*/
export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Product.find().sort({ _id: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

/* DELETE Product */

export const deletePost = async (req, res) => {
  try {
    const { PostId } = req.params;
    await Product.findByIdAndDelete(PostId);

    let posts = await Product.find().sort({ _id: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
};

/* UPDATE Product */

export const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { description, imgUrl, videoUrl, productName } = req.body;

    const post = await Product.findById(postId);
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }
    if (description) post.description = description;
    if (productName) post.productName = productName;

    if (imgUrl) {
      post.imgUrl = imgUrl;
      post.videoUrl = "";
    }
    if (videoUrl) {
      post.videoUrl = videoUrl;

      post.imgUrl = "";
    }

    const updatedPost = await post.save();

    res.status(200).json({
      success: true,
      message: "Post updated successfully!",
      updatedPost: updatedPost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
