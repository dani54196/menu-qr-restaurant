import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "./index.models.js";
import bcrypt from "bcryptjs";

class User extends Model {}

User.init(
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
  },
  {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
      },
      beforeUpdate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
      },
    },
    // instanceMethods:{
    //   validPassword: function(password) {
    //     return bcrypt.compareSync(password, user.password);
    //   }
    // },
    timestamps: true,
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

export default User;
