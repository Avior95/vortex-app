const express = require("express");
const router = express.Router();
const menHomePageService = require("../../model/menHomePageService/menHomePageService");
// const itemsValidationService = require("../../validation/itemsValidationService");
// const permissionsMiddleware = require("../../middleware/permissionsMiddleware");
// const authmw = require("../../middleware/authMiddleware");

router.get("/", async (req, res) => {
  try {
    const allItems = await menHomePageService.getAllItems();
    res.json(allItems);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
