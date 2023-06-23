import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import gigRoute from "./routes/gig.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config(); // to read values from .env file

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};
app.use(express.json()); // middleware: to get json body of client request
app.use(cookieParser()); // for jwt
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // for cors library

app.use("/api/gigs", gigRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/order", orderRoute);
app.use("/api/review", reviewRoute);
app.use("/api/messages", messageRoute);
app.use("/api/conversation", conversationRoute);

app.use((err, req, res, next) => {
  // .use - means it will execute as a middleware for all requests
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running !!");
});
