const express = require("express");
const router = express.Router();
const { ordersController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middlewares/auth");

router.use(authenticateToken);

router.post("/", authorizeRole("customer"), ordersController.createOrder);
router.get("/", authorizeRole("cashier"), ordersController.getOrders);
router.put(
  "/:id",
  authorizeRole("cashier"),
  ordersController.updateOrderStatus
);

module.exports = router;
