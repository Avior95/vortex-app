const config = require("config");
const menItemsServiceMongo = require("../mongodb/homePageMen/MenHomePageService");
const dbOption = config.get("dbOption");

const createItem = (itemToSave) => {
  if (dbOption === "mongo") {
    return menItemsServiceMongo.createItem(itemToSave);
  }
};

const getAllItems = () => {
  if (dbOption === "mongo") {
    return menItemsServiceMongo.getAllItems();
  }
};

const getItemById = (id) => {
  if (dbOption === "mongo") {
    return menItemsServiceMongo.getItemById(id);
  }
};

const updateItem = (id, ItemToUpdate) => {
  if (dbOption === "mongo") {
    return menItemsServiceMongo.updateItem(id, ItemToUpdate);
  }
};

const deleteItem = (id) => {
  if (dbOption === "mongo") {
    return menItemsServiceMongo.deleteItem(id);
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
