const { Order, OrderItem, MenuItem } = require("../../models");

exports.createOrder = async (req, res) => {
  const { menuItems } = req.body;
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
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: MenuItem, through: { attributes: ["quantity"] } }],
    });
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
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
};
