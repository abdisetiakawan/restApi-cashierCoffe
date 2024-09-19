const express = require("express");
const router = express.Router();
const { salesReportController } = require("../controllers");
const { authenticateToken, authorizeRole } = require("../middlewares/auth");

router.use(authenticateToken);

router.get("/", authorizeRole("owner"), salesReportController.getSalesReport);

module.exports = router;
