import sequelize from "./connection.js";
import "../models/associations.js";

import User from "../models/user.models.js";
import Restaurant from "../models/restaurant.model.js";
import Item from "../models/item.model.js";

// Define the seed data
const users = [
  {
    email: "john1@example.com",
    password: "asd",
    firstName: "John1",
  },
  {
    email: "john2@example.com",
    password: "asd",
    firstName: "John2",
  },
  {
    email: "john3@example.com",
    password: "asd",
    firstName: "John3",
  },
  {
    email: "john4@example.com",
    password: "asd",
    firstName: "John4",
  },
  {
    email: "john5@example.com",
    password: "asd",
    firstName: "John5",
  },
  {
    email: "john6@example.com",
    password: "asd",
    firstName: "John6",
  },
];

const restaurants = [
  {
    name: "pizzeria ia",
    description: "venta de pizzas",
    location: "av 9 julio 500",
    logo_url: "imagen1",
    qr_url: "qr1",
    userId: "1",
  },
  {
    name: "quien sabe ia",
    description: "Empanadas",
    location: "rivadavia 1420",
    logo_url: "imagen2",
    qr_url: "qr2",
    userId: "2",
  },
  {
    name: "oasis ia",
    description: "venta de Peperori",
    location: "av 9 julio 500",
    logo_url: "imagen3",
    qr_url: "qr3",
    userId: "3",
  },
  {
    name: "nose ia",
    description: "venta de pizzas",
    location: "av 9 julio 500",
    logo_url: "imagen4",
    qr_url: "qr4",
    userId: "1",
  },
  {
    name: "cansebero ia",
    description: "venta de Salchipapas",
    location: "av 9 julio 500",
    logo_url: "imagen5",
    qr_url: "qr5",
    userId: "4",
  },
  {
    name: "boom",
    description: "venta de pizzas",
    location: "av 9 julio 500",
    logo_url: "imagen6",
    qr_url: "qr6",
    userId: "5",
  },
  {
    name: "bastick ia",
    description: "venta de pizzas",
    location: "av 9 julio 500",
    logo_url: "imagen7",
    qr_url: "qr7",
    userId: "1",
  },
];
const items = [
  {
    name: "empanada de lechuga",
    description: "empanada con masa de avena y lechuga",
    price: "250",
    img_url: "imagen",
    avaible: false,
    restaurantId: "1",
  },
  {
    name: "empanada de tomate",
    description: "empanada con masa de avena y lechuga",
    price: "2350",
    img_url: "imagen2",
    avaible: false,
    restaurantId: "1",
  },
  {
    name: "empanada de lechuga",
    description: "empanada con masa de avena y lechuga",
    price: "250",
    img_url: "imagen3",
    avaible: false,
    restaurantId: "1",
  },
  {
    name: "empanada de acelga",
    description: "empanada con masa de avena y lechuga",
    price: "250",
    img_url: "imagen4",
    avaible: false,
    restaurantId: "1",
  },
];

// Define the seed function
const seed = async () => {
  try {
    // reset db
    await sequelize.sync({ force: true });
    // Insert the seed data into the database
    await User.bulkCreate(users, { individualHooks: true }); // for hash each password
    await Restaurant.bulkCreate(restaurants);
    await Item.bulkCreate(items);
    console.log("Seed data inserted successfully!");
  } catch (error) {
    console.error("Error inserting seed data:", error);
  }
};
// Call the seed function
seed();
