import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const authControllers = {};

authControllers.singIn = async (req, res) => {
  // check if user exist
  const user = await User.findOne({ where: { email: req.body.email } });
  res.json({ user });
  // check password

  //
  // const payload = {
  //   userId: 123,
  // };
  // secret
  const secret = process.env.JWT_SECRET;

  // const token = jwt.sign(payload, secret);
  // res.json(token);
};

authControllers.validate = async (req, res) => {
  const secret = process.env.JWT_SECRET;

  const { x } = req.body;
  try {
    const payload = jwt.verify(token, secret);
    res.json(payload);
  } catch (err) {
    console.log(err);
  }
};

export default authControllers;
