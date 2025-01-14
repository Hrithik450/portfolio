import bcryptjs from "bcryptjs";
import crypto from "crypto";
import ErrorHandler from "../utils/errorhandler.js";
import db from "../database/firebase.js";
import createUser from "../model/auth.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { generateTokenandSetcookie } from "../utils/generateToken.js";

const usersRef = collection(db, "users");

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (!email || !username || !password) {
      return next(new ErrorHandler("All fields are required!", 400));
    }

    const Query = query(usersRef, where("email", "==", email));
    const UserAlreadyExists = await getDocs(Query);
    if (!UserAlreadyExists.empty) {
      return next(
        new ErrorHandler(`User Already Exists with this ${email}`, 400)
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = {
      username: username,
      email: email,
      password: hashedPassword,
      verificationToken: verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    };
    const userID = await createUser(user);

    generateTokenandSetcookie(res, userID);

    res.status(201).json({
      success: true,
      message: "User Successfully Created",
      user: { userID, token, ...user },
    });
  } catch (error) {
    next(error);
  }
};
