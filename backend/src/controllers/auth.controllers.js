import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../models/user.models.js";

const authControllers = {};

authControllers.singUp = async (req, res) => {
  try {
    //get json
    const { user_id, email, password, firstName, restaurants } = req.body;
    // check email repeat
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(401).json({ message: "email repeat" });
    }
    // the password bcript hash in hooks
    // create the user
    const userCreate = await User.create({
      user_id,
      email,
      password,
      firstName,
      restaurants,
    });
    res.json(userCreate);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

authControllers.singIn = async (req, res) => {
  try {
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
    // generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    // return token
    res.json({ token });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

export default authControllers;
