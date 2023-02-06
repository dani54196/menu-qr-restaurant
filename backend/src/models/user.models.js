import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "./index.models.js";
import bcrypt from "bcryptjs";

class User extends Model {}

User.init(
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100],
        isPassword: function (value) {
          // Check for special characters
          if (!/[!@#$%^&*]/.test(value)) {
            throw new Error("Password must contain a special character");
          }
        },
      },
    },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.beforeUpdate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.prototype.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default User;
