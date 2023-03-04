import { Router } from "express";

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import restaurantRoutes from "./restaurant.routes.js";
import itemRoutes from "./items.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/item", itemRoutes);

export default router;
