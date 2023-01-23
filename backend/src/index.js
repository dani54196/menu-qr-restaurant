import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import express from "express";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import indexRoutes from "./routes/index.routes.js";

// config
const app = express();
const port = process.env.PORT;
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// routes
app.use("/api", indexRoutes);

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
