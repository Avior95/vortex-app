const config = require("config");
const itemsServiceMongo = require("../mongodb/items/itemsService");
const dbOption = config.get("dbOption");

const createItem = (itemToSave) => {
  if (dbOption === "mongo") {
    return itemsServiceMongo.createItem(itemToSave);
  }
};

const getAllItems = () => {
  if (dbOption === "mongo") {
    return itemsServiceMongo.getAllItems();
  }
};

const getItemById = (id) => {
  if (dbOption === "mongo") {
    return itemsServiceMongo.getItemById(id);
  }
};

const updateCard = (id, ItemToUpdate) => {
  if (dbOption === "mongo") {
    return itemsServiceMongo.updateCard(id, ItemToUpdate);
  }
};

const deleteItem = (id) => {
  if (dbOption === "mongo") {
    return itemsServiceMongo.deleteItem(id);
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateCard,
  deleteItem,
};
