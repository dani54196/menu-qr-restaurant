import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import express from "express";

import * as dotenv from "dotenv";
dotenv.config();

import("./db.js");
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
app.use("/", indexRoutes);

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
