import User from "../models/user.models.js";

const userControllers = {};

userControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

userControllers.getUser = async (req, res) => {
  try {
    const user = await User.findByPk({ where: req.params.id });
    res.json(user);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

userControllers.deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: req.params.id });
    res.json({ msg: "user Delete" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

userControllers.updateUser = async (req, res) => {
  try {
    const user = await User.update(
      { where: req.params.id },
      {
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
      }
    );
    res.json(user);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

export default userControllers;
