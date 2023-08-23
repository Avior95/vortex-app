const config = require("config");
const womenItemsServiceMongo = require("../mongodb/homePageWomen/WomenHomePageService");
const dbOption = config.get("dbOption");

const createItem = (itemToSave) => {
  if (dbOption === "mongo") {
    return womenItemsServiceMongo.createItem(itemToSave);
  }
};

const getAllItems = () => {
  if (dbOption === "mongo") {
    return womenItemsServiceMongo.getAllItems();
  }
};

const getItemById = (id) => {
  if (dbOption === "mongo") {
    return womenItemsServiceMongo.getItemById(id);
  }
};

const updateItem = (id, ItemToUpdate) => {
  if (dbOption === "mongo") {
    return womenItemsServiceMongo.updateItem(id, ItemToUpdate);
  }
};

const deleteItem = (id) => {
  if (dbOption === "mongo") {
    return womenItemsServiceMongo.deleteItem(id);
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
