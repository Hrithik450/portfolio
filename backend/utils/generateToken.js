import jwt from "jsonwebtoken";

export const generateTokenandSetcookie = (res, userID) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "None",
    domain: ".onrender.com",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return token;
};
