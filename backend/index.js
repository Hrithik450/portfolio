import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import errorMiddleware from "./middleware/error.js";
import createUser from "./model/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "config/config.env") });

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(cors({ origin: "https://hruthik.onrender.com", credentials: "true" }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use(errorMiddleware);

// createUser({
//   email: "mhrithik450@gmail.com",
//   password: "Mhrithik450@",
//   username: "Mhrithk450",
// });

app.listen(PORT, () => {
  console.log("Server Started at port ", PORT);
});
