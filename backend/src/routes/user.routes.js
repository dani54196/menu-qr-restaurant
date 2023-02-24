import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";

const router = Router();

router.get("/", userControllers.getAllUser);

export default router;
