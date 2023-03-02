import { Router } from "express";
import restaurantControllers from "../controllers/restaurant.controllers.js";

const router = Router();

router.get("/", restaurantControllers.getAllRestaurant);
router.get("/:id", restaurantControllers.getRestaurant);
router.post("/", restaurantControllers.createRestaurnt);

export default router;
