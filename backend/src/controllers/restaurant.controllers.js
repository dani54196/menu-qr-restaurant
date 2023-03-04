import Restaurant from "../models/restaurant.model.js";

const restaurantControllers = {};

restaurantControllers.getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

restaurantControllers.getRestaurant = async (req, res) => {
  try {
    const { restaurant_id } = req.params;
    const restaurant = await Restaurant.findOne({ where: restaurant_id });
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

restaurantControllers.createRestaurnt = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

restaurantControllers.deleteRestaurant = async (req, res) => {
  try {
    Restaurant.destroy({ where: { id: req.params.id } });
    res.json({ msg: "restaurant delete " });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

restaurantControllers.updateRestaurant = async (req, res) => {
  try {
    const { name, description, location, logo_url, qr_url, userId } = req.body;
    Restaurant.update(
      { name, description, location, logo_url, qr_url, userId },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({ msg: "update restaurant" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};
export default restaurantControllers;
