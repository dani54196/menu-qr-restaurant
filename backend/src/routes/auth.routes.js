import { Router } from "express";
import authControllers from "../controllers/auth.controllers.js";

const router = Router();

router.post("/singup", authControllers.singUp);
router.post("/singin", authControllers.singIn);

// router.post("/validate", authControllers.validate);

export default router;
