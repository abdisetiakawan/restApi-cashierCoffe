const { Order, OrderItem, MenuItem, sequelize } = require("../../models");

exports.getSalesReport = async (req, res) => {
  try {
    const totalSales = await OrderItem.sum("quantity", {
      include: [
        {
          model: Order,
          where: { status: "completed" },
          attributes: [],
        },
      ],
    });

    const totalTransactions = await Order.count({
      where: { status: "completed" },
    });

    const itemsSold = await OrderItem.findAll({
      attributes: [
        "menuItemId",
        [sequelize.fn("sum", sequelize.col("quantity")), "totalQuantity"],
      ],
      group: ["menuItemId"],
      include: [{ model: MenuItem, attributes: ["name"] }],
    });

    res.json({
      totalSales,
      totalTransactions,
      itemsSold,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
