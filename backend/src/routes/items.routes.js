import { Router } from "express";
import itemController from "../controllers/item.controllers.js";

const router = Router();

router.get("/", itemController.getAllItems);
router.get("/:id", itemController.getItem);
router.post("/", itemController.createtItem);
router.delete("/:id", itemController.deleteItem);
router.put("/:id", itemController.updateItem);

export default router;
