import { Sequelize, DataTypes, Model } from "sequelize";

import sequelize from "../db/connection.js";

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: { type: DataTypes.STRING },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    img_url: { type: DataTypes.STRING },
    avaible: { type: DataTypes.BOOLEAN },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "item",
  }
);

export default Item;
