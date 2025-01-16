import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import ErrorHandler from "../utils/errorhandler.js";
import db from "../database/firebase.js";
import createUser from "../model/auth.js";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { generateTokenandSetcookie } from "../utils/generateToken.js";
import SendMail from "../utils/emails.js";
import ejs from "ejs";
import path from "path";
import { profile } from "console";

const usersRef = collection(db, "users");
const projects = [
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ad15f6f9cb7d164c6f3_Projects%20Image%206.jpg",
    title:
      "Project 3Lorem  dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. Project 3Lorem dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. ",
    link: "https://yourwebsite.com/project1",
  },
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ac6bd803221a913321d_Projects%20Image%205-p-800.jpeg",
    title:
      "Project 3Lorem  dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. Project 3Lorem dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. ",
    link: "https://yourwebsite.com/project2",
  },
  {
    image:
      "https://cdn.prod.website-files.com/61f77fc62f2d6f5df4a7a073/62120ab5eefeeca19d60e5e9_Projects%20Image%204.jpg",
    title:
      "Project 3Lorem  dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. Project 3Lorem dolor sit, amet consectetur adipisicing elit.Dolorem, aliquam. ",
    link: "https://yourwebsite.com/project3",
  },
];

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (!email || !username || !password) {
      return next(new ErrorHandler("All fields are required!", 400));
    }

    const UserAlreadyExists = await getDocs(
      query(usersRef, where("email", "==", email))
    );

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
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 10 * 60 * 1000,
      isVerified: false,
    };

    const userID = await createUser(user);
    const userDocRef = doc(db, "users", userID);
    await updateDoc(userDocRef, {
      userID: userID,
    });

    generateTokenandSetcookie(res, userID);

    const templatePath = path.resolve("views", "verifyEmail.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      verificationToken,
    });

    await SendMail({
      to: email,
      subject: "Your Email Verification Code for Hruthik M",
      html: htmlContent,
    });

    res.status(201).json({
      success: true,
      message: "User Successfully Created, An email verification code is sent.",
      user: { ...user },
    });
  } catch (error) {
    next(error);
  }
};

export const verifyemail = async (req, res, next) => {
  const { code } = req.body;

  try {
    const UserId = req.user.userID;
    const UserDocRef = doc(db, "users", UserId);
    const UserSnapShot = await getDoc(UserDocRef);

    if (!UserSnapShot.exists()) {
      return next(new ErrorHandler("User not found!", 404));
    }

    const user = UserSnapShot.data();
    if (
      user.verificationToken !== code ||
      Date.now() > user.verificationTokenExpiresAt
    ) {
      return next(new ErrorHandler("Invalid or code may be expired:", 404));
    }

    await updateDoc(UserDocRef, {
      isVerified: true,
      verificationToken: null,
      verificationTokenExpiresAt: null,
    });

    const templatePath = path.resolve("views", "welcome.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      username: user.username,
      projects: projects,
    });

    await SendMail({
      to: user.email,
      subject: "Welcome to Hruthik M - Where Creativity Meets Innovation!",
      html: htmlContent,
    });

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const resendEmail = async (req, res, next) => {
  try {
    const UserID = req.user.userID;
    const UserDocRef = doc(db, "users", UserID);
    const UserSnapShot = await getDoc(UserDocRef);

    if (!UserSnapShot.exists()) {
      return next(new ErrorHandler("User not found!!", 404));
    }

    const user = UserSnapShot.data();

    if (user.isVerified) {
      return next(new ErrorHandler("User is already verified", 400));
    }

    const newVerificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    await updateDoc(UserDocRef, {
      verificationToken: newVerificationToken,
      verificationTokenExpiresAt: Date.now() + 10 * 60 * 1000,
    });

    const templatePath = path.resolve("views", "verifyEmail.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      verificationToken: newVerificationToken,
    });

    await SendMail({
      to: user.email,
      subject: "Your Email Verification Code for Hruthik M",
      html: htmlContent,
    });

    res.status(200).json({
      success: true,
      message: "Verification email has been resent successfully.",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return next(new ErrorHandler("Please fill all the details!", 400));
    }

    const userQuery = query(usersRef, where("email", "==", email));
    const userSnapshot = await getDocs(userQuery);

    if (userSnapshot.empty) {
      return next(new ErrorHandler("Invalid email or password!", 401));
    }

    const user = userSnapshot.docs[0].data();

    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatch) {
      return next(new ErrorHandler("Invalid email or password!", 401));
    }

    const token = generateTokenandSetcookie(res, user.userID);
    const UserDocRef = doc(db, "users", user.userID);
    await updateDoc(UserDocRef, {
      lastLogin: new Date(),
    });

    res.status(200).json({
      success: true,
      message: "Login successful!",
      user: {
        userID: user.userID,
        email: user.email,
        username: user.username,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Successfully logged out!",
  });
};

export const forgetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    if (!email) {
      return next(new ErrorHandler("please enter your email", 401));
    }

    const Userquery = query(usersRef, where("email", "==", email));
    const UserSnapShot = await getDocs(Userquery);

    if (UserSnapShot.empty) {
      return next(
        new ErrorHandler("User not found!, please re-enter your email", 404)
      );
    }

    const user = UserSnapShot.docs[0].data();
    const userId = user.userID;

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenhash = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    const resetTokenExpiresAt = Date.now() + 15 * 60 * 1000;

    const UserDocRef = doc(db, "users", userId);
    await updateDoc(UserDocRef, {
      resetPasswordToken: resetTokenhash,
      resetPasswordExpiresAt: resetTokenExpiresAt,
    });

    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const templatePath = path.resolve("views", "PassresetEmail.ejs");
    const htmlContent = await ejs.renderFile(templatePath, {
      resetlink: resetURL,
    });

    // await SendMail({
    //   to: email,
    //   subject: "Password reset link for Hrutihk M",
    //   html: htmlContent,
    // });

    res.status(200).json({
      success: true,
      message: "Password reset link has been sent to your email",
    });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  const { resetToken, newPassword } = req.body;

  try {
    if (!resetToken || !newPassword) {
      return next(new ErrorHandler("please provide the new password!", 401));
    }

    const Query = query(
      usersRef,
      where("resetPasswordToken", "==", resetToken),
      where("resetPasswordExpiresAt", ">", Date.now())
    );

    const userSnapshot = await getDocs(Query);
    if (userSnapshot.empty) {
      return next(new ErrorHandler("Reset link expired, try agian later", 404));
    }

    const user = userSnapshot.docs[0].data();
    const userId = user.userID;

    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordExpiresAt: null,
    });

    res.status(200).json({
      success: true,
      message: "password reset successful, you can now login with new password",
    });
  } catch (error) {
    next(error);
  }
};

export const googleAuth = (req, res, next) => {
  passport.serializeUser((user, done) => {
    done(null, user.userID);
  });

  passport.deserializeUser(async (userID, done) => {
    const UserDoc = await getDoc(doc(db, "users", userID));
    if (UserDoc.exists()) {
      done(null, UserDoc.data());
    } else {
      done(new ErrorHandler("user not found!", 404), null);
    }
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.BACKEND_URL}/oauth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const GoogleID = profile.id;

          const userDocRef = doc(usersRef, GoogleID);
          const userDoc = await getDoc(userDocRef);

          if (!userDoc.exists()) {
            const newUser = {
              userID: GoogleID,
              username: profile.displayName,
              email: profile.emails[0].value,
              image: profile.photos[0].value,
              createdAt: Timestamp.now(),
              lastLogin: Timestamp.now(),
              isVerified: true,
            };

            await setDoc(userDocRef, newUser);
            return done(null, newUser);
          } else {
            await updateDoc(userDocRef, {
              lastLogin: Timestamp.now(),
            });
            return done(null, userDoc.data());
          }
        } catch (error) {
          next(error);
        }
      }
    )
  );
};
