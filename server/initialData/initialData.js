const usersService = require("../model/usersService/usersService");
const mensService = require("../model/itemsService/menItemsService");
const womenService = require("../model/womenItemService/womenItemsService");

const CategoriesMenService = require("../model/menHomePageService/menHomePageService");
const CategoriesWomenService = require("../model/womenHomePageService/womenHomePageService");

const hashService = require("../utils/hash/hashService");
const normalizeUser = require("../model/usersService/helpers/normalizationUserService");
const normalizeItem = require("../model/itemsService/helpers/normalizationItemService");

const usersData = require("./users.json");
const menItemsData = require("./menItems.json");
const womenItemsData = require("./womenItems.json");

const categoriesMenData = require("./MenCategories.json");
const categoriesWomenData = require("./WomenCategories.json");

const initialData = async () => {
  try {
    let womenItems = await womenService.getAllItems();
    if (womenItems.length) {
      return;
    }
    let menItems = await mensService.getAllItems();
    if (menItems.length) {
      return;
    }
    let womenCategory = await CategoriesWomenService.getAllItems();
    if (womenCategory.length) {
      return;
    }
    let menCategory = await CategoriesMenService.getAllItems();
    if (menCategory.length) {
      return;
    }
    let users = await usersService.getAllUsers();
    if (users.length) {
      return;
    }
    let user_id = "";
    for (let user of usersData) {
      user.password = await hashService.generateHash(user.password);
      user = normalizeUser(user);
      user_id = await usersService.registerUser(user);
    }
    user_id = user_id._id + "";
    for (let item of menItemsData) {
      item = await normalizeItem(item, user_id);
      await mensService.createItem(item);
    }
    for (let item of womenItemsData) {
      item = await normalizeItem(item, user_id);
      await womenService.createItem(item);
    }
    for (let item of categoriesMenData) {
      item = await normalizeItem(item, user_id);
      await CategoriesMenService.createItem(item);
    }
    for (let item of categoriesWomenData) {
      item = await normalizeItem(item, user_id);
      await CategoriesWomenService.createItem(item);
    }
  } catch (err) {
    console.log("err from initial", err);
  }
};

module.exports = initialData;
