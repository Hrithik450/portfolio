import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
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

export default router;
