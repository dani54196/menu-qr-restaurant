import { Sequelize, DataTypes, Model } from "sequelize";

import sequelize from "../db.js";

class Restaurant extends Model {}

Restaurant.init(
  {
    restaurant_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
    logo_url: { type: DataTypes.STRING },
    qr_url: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "restaurant",
  }
);

export default Restaurant;
