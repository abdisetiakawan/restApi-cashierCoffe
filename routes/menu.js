const express = require("express");
const router = express.Router();
const { menuController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middlewares/auth");

router.use(authenticateToken);

router.get("/", menuController.getMenuItems);
router.post("/", authorizeRole("owner"), menuController.createMenuItem);
router.put("/:id", authorizeRole("owner"), menuController.updateMenuItem);
router.delete("/:id", authorizeRole("owner"), menuController.deleteMenuItem);

module.exports = router;
