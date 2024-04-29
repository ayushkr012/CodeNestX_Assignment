import express from "express";
import {
  login,
  sendOtp,
  verifyOtp,
  register,
  adminlogin,
} from "../controllers/auth.js";

const authRoutes = express.Router();

/*admin Login */
authRoutes.post("/adminlogin", adminlogin);
/*user part */
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/sendotp", sendOtp);
authRoutes.post("/verifyotp", verifyOtp);

export default authRoutes;
