import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import "./db.js";
import "./models/associations.js";
import indexRoutes from "./routes/index.routes.js";
import { swaggerOptions } from "./swagger.js";

// config
dotenv.config();
const app = express();
const port = process.env.PORT;
const swaggerDocs = swaggerJsdoc(swaggerOptions);
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
// routes
app.use("/", indexRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
