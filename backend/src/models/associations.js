import User from "./user.models.js";
import Restaurant from "./restaurant.model.js";
import Item from "./item.model.js";

User.hasMany(Restaurant);
Restaurant.belongsTo(User);

Restaurant.hasMany(Item);
Item.belongsTo(Restaurant);
