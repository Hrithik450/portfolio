import express from "express";

const router = express.Router();

router.get("/privacy-policy", (req, res, next) => {
  try {
    res.redirect("/docs/privacy-policy.pdf");
  } catch (error) {
    next(error);
  }
});

router.get("/terms-of-service", (req, res, next) => {
  try {
    res.redirect("/docs/terms-of-service.pdf");
  } catch (error) {
    next(error);
  }
});

export default router;
