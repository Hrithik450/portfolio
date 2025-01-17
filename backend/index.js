import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import docRoutes from "./routes/docs.js";
import session from "express-session";
import { facebookAuth, googleAuth } from "./controller/authcontroller.js";
import errorMiddleware from "./middleware/error.js";
import oauthRoutes from "./routes/oauth.js";
import passport from "passport";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "config/config.env") });

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middlewares
app.use(cors({ origin: "https://hruthik.onrender.com", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/docs", express.static(path.resolve(__dirname, "public/docs")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "none",
    },
  })
);
googleAuth();
facebookAuth();
app.use(passport.initialize());
app.use(passport.session());

app.use("/oauth", oauthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/docs", docRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Server Started at port ", PORT);
});
