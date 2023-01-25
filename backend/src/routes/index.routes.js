import { Router } from "express";
const router = Router();

import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";

router.get("/", (req, res) => {
  res.send("Public route");
});

router.use("/user", userRoutes);

router.use("/auth", authRoutes);

export default router;
