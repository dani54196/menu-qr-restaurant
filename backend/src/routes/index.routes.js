import { Router } from "express";

import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import restaurantRoutes from "./restaurant.routes.js";
import itemRoutes from "./items.routes.js";

import docs from "../docs/swagger.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Public route");
});

router.use("/docs", docs);

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/item", itemRoutes);

export default router;
