// models/index.js
const sequelize = require("../config/database");
const User = require("./entities/User");
const MenuItem = require("./entities/MenuItem");
const Order = require("./entities/Order");
const OrderItem = require("./entities/OrderItem");

User.hasMany(Order, { foreignKey: "customerId" });
Order.belongsTo(User, { foreignKey: "customerId" });

Order.belongsToMany(MenuItem, { through: OrderItem, foreignKey: "orderId" });
MenuItem.belongsToMany(Order, { through: OrderItem, foreignKey: "menuItemId" });

module.exports = {
  sequelize,
  User,
  MenuItem,
  Order,
  OrderItem,
};
