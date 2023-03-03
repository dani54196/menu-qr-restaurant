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
  const { name, description, location, logo_url, qr_url, userId } = req.body;
  const restaurant = await Restaurant.create({
    name,
    description,
    location,
    logo_url,
    qr_url,
    userId,
  });
  res.json(restaurant);
};

restaurantControllers.deleteRestaurant = async (req, res) => {
  Restaurant.destroy({ where: { id: req.params.id } });
  res.json({msg: "restaurant delete "})
};

restaurantControllers.updateRestaurant = async (req, res) => {
  const { name, description, location, logo_url, qr_url, userId } = req.body;
  Restaurant.update(
    { name, description, location, logo_url, qr_url, userId },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.json({msg: "update restaurant"})

};
export default restaurantControllers;
