import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../models/user.models.js";

const authControllers = {};

authControllers.singUp = async (req, res) => {
  //get json
  const { user_id, email, password, firstName } = req.body;
  // check email repeat
  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.status(401).json({ message: "email repeat" });
  }
  // the password hash with hooks of sequelize
  // create the user
  User.create({ user_id, email, password, firstName });
  res.json({ msg: "user cerate" });
};

authControllers.singIn = async (req, res) => {
  const { email, password } = req.body;
  // check if email exist
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(400).json({ message: "email dont exist" });
  }
  // check if password is correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "invalid password" });
  }

  // Generate JWT
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET , { expiresIn: "1h" });

  res.json({ token });
};

export default authControllers;
