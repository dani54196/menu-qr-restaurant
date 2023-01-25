import User from "../models/user.models.js";

const UserCtrl = {};

UserCtrl.createUser = async (req, res) => {
  const { user_id, email, password, firstName, lastName } = req.body;
  User.create({ user_id, email, password, firstName, lastName });
};

UserCtrl.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({ users });
};

export default UserCtrl;
