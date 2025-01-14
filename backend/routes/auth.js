import express from "express";
import { signup } from "../controller/authcontroller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", () => {});
router.post("/logout", () => {});

export default router;
