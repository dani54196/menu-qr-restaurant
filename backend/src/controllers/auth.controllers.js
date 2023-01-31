import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

const authControllers = {};

authControllers.singIn = async (req, res) => {
  // check if user exist
  const userR = await User.findOne({ where: { email: req.body.email } });
  console.log(userR.password);
  // check password
  let confirmaContra = bcrypt.compareSync((userR.password, 10));
  console.log(confirmaContra);
  //create token
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
