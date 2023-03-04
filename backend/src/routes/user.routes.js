import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";

const router = Router();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUser);
router.delete("/:id", userControllers.deleteUser);
router.put("/:id", userControllers.updateUser);

export default router;
