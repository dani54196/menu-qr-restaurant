import User from "../models/user.models.js";

const userControllers = {};

userControllers.getAllUser = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export default userControllers;
