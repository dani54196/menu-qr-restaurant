import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import "./db/connection.js";
import "./models/associations.js";
import indexRoutes from "./routes/index.routes.js";

// config
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
// routes
app.use("/", indexRoutes);

export default app;
