import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    productName: {
      type: String,
      // required: true,
    },
    description: String,
    imgUrl: String, // Path to the picture file which is uploaded in cloudinary
    videoUrl: String, // Path to the video file
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
