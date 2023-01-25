import { Router } from "express";
const router = Router();

import userRoutes from "./user.routes.js";

router.get("/", (req, res) => {
  res.send("Index route");
});

router.use("/user", userRoutes);

export default router;
