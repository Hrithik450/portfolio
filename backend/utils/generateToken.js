import jwt from "jsonwebtoken";

export const generateTokenandSetcookie = (res, userID) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: false,
    secure: true,
    sameSite: "None",
    path: "/",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    domain: ".onrender.com",
  });

  return token;
};
