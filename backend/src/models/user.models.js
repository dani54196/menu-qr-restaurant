import { Sequelize, DataTypes, Model } from "sequelize";
import bcrypt from "bcryptjs";

import sequelize from "../db.js";
import Restaurant from "./restaurant.model.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // Strong pass
      // validate: {
      //   len: [8, 100],
      //   isPassword: function (value) {
      //     // Check for special characters
      //     if (!/[!@#$%^&*]/.test(value)) {
      //       throw new Error("Password must contain a special character");
      //     }
      //   },
      // },
    },
    firstName: { type: DataTypes.STRING }
  },
  {
    timestamps: true,
    sequelize, // We need to pass the connection instance
    modelName: "user", // We need to choose the model name
    // hash password
    hooks: {
      beforeCreate: async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        }
      },
    },
  }
);

export default User;
