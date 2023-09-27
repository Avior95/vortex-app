const express = require("express");
const router = express.Router();
const womenItemsService = require("../../model/womenItemService/womenItemsService");
const itemsValidationService = require("../../validation/itemsValidationService");
const permissionsMiddleware = require("../../middleware/permissionsMiddleware");
const authmw = require("../../middleware/authMiddleware");

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

router.post(
  "/",
  // authmw,
  // permissionsMiddleware(true, false, false),
  async (req, res) => {
    try {
      await itemsValidationService.createItemValidation(req.body);
      // normalizeItem///
      // const dataFromMongoose = await menItemsServiceModel.createItem(normalItem);
      const dataFromMongoose = await womenItemsService.createItem(req.body);
      console.log("dataFromMongoose", dataFromMongoose);
      res.json({ msg: "Successfully added card" });
    } catch (err) {
      res.status(400).json(err);
    }
  }
);

router.put("/:id", authmw, permissionsMiddleware(true), async (req, res) => {
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

router.patch("/:id", authmw, async (req, res) => {
  try {
    await itemsValidationService.idValidation(req.params.id);
    const itemFromDB = await womenItemsService.getCardById(req.params.id);
    if (itemFromDB.likes.includes(req.userData._id)) {
      return res.json({ msg: "The card is already liked" });
    } else {
      itemFromDB.likes.push(req.userData._id);
    }
    await womenItemsService.updateItem(req.params.id, itemFromDB);
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
