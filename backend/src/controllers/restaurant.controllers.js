import Restaurant from "../models/restaurant.model.js";

const restaurantControllers = {};

restaurantControllers.getAllRestaurant = async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
};

restaurantControllers.getRestaurant = async (req, res) => {
  const { restaurant_id } = req.params;
  const restaurant = await Restaurant.findOne({ where: restaurant_id });
  res.status(200).json(restaurant);
};

restaurantControllers.createRestaurnt = async (req, res) => {
  const { name, description, location, logo_url, qr_url, items } = req.body;
  await Restaurant.create({
    name,
    description,
    location,
    logo_url,
    qr_url,
    items,
  });
  res.json({ msg: "Create" });
};
export default restaurantControllers;
