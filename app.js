import express from "express";
import userRouter from "./routes/user.js";
import hostRouter from "./routes/host.js";
import contactusRouter from "./routes/contactUs.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";


export const app = express();

// Middleware
app.use(express.json()); // Corrected: Need to invoke the function
app.use(cookieParser());

//using router
app.use(userRouter);
app.use(hostRouter);
app.use(contactusRouter);


config({
  path: "./data/config.env",
});

app.get("/", (req, res) => {
  res.send("nice working");
});


