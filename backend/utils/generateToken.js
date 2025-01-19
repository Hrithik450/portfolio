import jwt from "jsonwebtoken";

export const generateTokenandSetcookie = (res, userID) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
    domain:
      process.env.NODE_ENV === "production"
        ? "https://hruthik.onrender.com"
        : "https://hruthik-backend.onrender.com",
  });

  return token;
};
