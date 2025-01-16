import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorhandler.js";

const isAuthenticated = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(
      new ErrorHandler("please login or signup to verify email:", 401)
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(
      new ErrorHandler(
        "Your session has expired please try to login again or sign up",
        401
      )
    );
  }
};

export default isAuthenticated;
