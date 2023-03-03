import { Router } from "express";
import restaurantControllers from "../controllers/restaurant.controllers.js";

const router = Router();

router.get("/", restaurantControllers.getAllRestaurant);
router.get("/:id", restaurantControllers.getRestaurant);
router.post("/", restaurantControllers.createRestaurnt);
router.delete("/:id", restaurantControllers.deleteRestaurant);
router.put("/:id", restaurantControllers.updateRestaurant);

export default router;
