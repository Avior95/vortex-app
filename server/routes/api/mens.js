const express = require("express");
const router = express.Router();
const menItemsServiceModel = require("../../model/itemsService/menItemsService");
const itemsValidationService = require("../../validation/itemsValidationService");
// const permissionsMiddleware = require("../../middleware/permissionsMiddleware");
// const authmw = require("../../middleware/authMiddleware");

router.get("/", async (req, res) => {
  try {
    const allItems = await menItemsServiceModel.getAllItems();
    res.json(allItems);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/men/:id", async (req, res) => {
  try {
    await itemsValidationService.idValidation(req.params.id);
    const itemFromDB = await menItemsServiceModel.getItemById(req.params.id);
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
      const dataFromMongoose = await menItemsServiceModel.createItem(req.body);
      console.log("dataFromMongoose", dataFromMongoose);
      res.json({ msg: "ok" });
    } catch (err) {
      res.status(400).json(err);
    }
  }
);

// router.put(
//   "/:id",
//   authmw,
//   permissionsMiddleware(false, true, false),
//   async (req, res) => {
//     try {
//       await itemsValidationService.idValidation(req.params.id);
//       await itemsValidationService.createItemValidation(req.body);
//       //normalizeItem
//       const itemFromDB = await menItemsServiceModel.updateItem(
//         req.params.id,
//         req.body
//       );
//       res.json(itemFromDB);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   }
// );

// router.delete(
//   "/:id",
//   authmw,
//   permissionsMiddleware(false, true, true),
//   async (req, res) => {
//     try {
//       await itemsValidationService.idValidation(req.params.id);
//       const itemFromDB = await menItemsServiceModel.deleteItem(req.params.id);
//       if (itemFromDB) {
//         res.json({ msg: "item deleted" });
//       } else {
//         res.json({ msg: "could not find the item" });
//       }
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   }
// );
module.exports = router;
