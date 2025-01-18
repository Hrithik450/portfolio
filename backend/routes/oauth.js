import express from "express";
import passport from "passport";
import { setCookie } from "../controller/authcontroller.js";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    const user = req.user;
    console.log(user);
    res.redirect(
      `https://hruthik.onrender.com/oauth-success?tempToken=${user.userID}`
    );
  }
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    session: true,
  }),
  (req, res) => {
    res.redirect("https://hruthik.onrender.com");
  }
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) next(err);
    res.redirect("https://hruthik.onrender.com");
  });
});

router.post("/api/set-cookie", setCookie);

export default router;
