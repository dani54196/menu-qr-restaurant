import { Router } from "express";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import swaggerOptions from "../docs/swagger.js";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import restaurantRoutes from "./restaurant.routes.js";
import itemRoutes from "./items.routes.js";

const router = Router();
const swaggerDocs = swaggerJsdoc(swaggerOptions);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the homepage
 *     responses:
 *       200:
 *         description: hello world
 */
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/item", itemRoutes);

export default router;
