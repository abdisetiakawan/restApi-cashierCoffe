// routes/orders.js
const express = require("express");
const router = express.Router();
const { Order, OrderItem, MenuItem } = require("../models");
const { authenticateToken, authorizeRole } = require("../middleware/auth");

router.use(authenticateToken);

router.post("/", authorizeRole("customer"), async (req, res) => {
  const { menuItems } = req.body; // expecting an array of menu items with quantity [{ id, quantity }]
  const { userId } = req.user;

  try {
    const order = await Order.create({ customerId: userId });

    for (const item of menuItems) {
      await OrderItem.create({
        orderId: order.id,
        menuItemId: item.id,
        quantity: item.quantity,
      });
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", authorizeRole("cashier"), async (req, res) => {
  const orders = await Order.findAll({
    include: [{ model: MenuItem, through: { attributes: ["quantity"] } }],
  });
  res.json(orders);
});

router.put("/:id", authorizeRole("cashier"), async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = "completed";
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
