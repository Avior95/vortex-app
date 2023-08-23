const express = require("express");
const router = express.Router();
const womenItemsService = require("../../model/womenItemService/womenItemsService");
// const itemsValidationService = require("../../validation/itemsValidationService");
// const permissionsMiddleware = require("../../middleware/permissionsMiddleware");
// const authmw = require("../../middleware/authMiddleware");

router.get("/", async (req, res) => {
  try {
    const allItems = await womenItemsService.getAllItems();
    res.json(allItems);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
