import { Router } from "express";
import UserCtrl from "../controllers/user.controlles.js";

const router = Router();

router.get("/", UserCtrl.getAllUsers);
router.post("/", UserCtrl.createUser);
export default router;
