import express from "express";
import {
  forgetPassword,
  login,
  logout,
  Profile,
  resendEmail,
  resetPassword,
  signup,
  verifyemail,
} from "../controller/authcontroller.js";
import isAuthenticated from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", isAuthenticated, verifyemail);
router.post("/resend-email", isAuthenticated, resendEmail);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);
router.get("/profile", isAuthenticated, Profile);

export default router;
