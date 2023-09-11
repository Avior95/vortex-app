const express = require("express");
const router = express.Router();
const womenItemsService = require("../../model/womenItemService/womenItemsService");
const itemsValidationService = require("../../validation/itemsValidationService");

router.get("/", async (req, res) => {
  try {
    const allItems = await womenItemsService.getAllItems();
    res.json(allItems);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/women/:id", async (req, res) => {
  try {
    await itemsValidationService.idValidation(req.params.id);
    const itemFromDB = await womenItemsService.getItemById(req.params.id);
    res.json(itemFromDB);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await itemsValidationService.idValidation(req.params.id);
    await itemsValidationService.createItemValidation(req.body);
    //normalizeItem
    const itemFromDB = await womenItemsService.updateItem(
      req.params.id,
      req.body
    );
    res.json(itemFromDB);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await itemsValidationService.idValidation(req.params.id);
    const itemFromDB = await womenItemsService.deleteItem(req.params.id);
    if (itemFromDB) {
      res.json({ msg: "item deleted" });
    } else {
      res.json({ msg: "could not find the item" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;

module.exports = router;
