// const Item = require("./MenItem");
const WomenItems = require("./womens");

const createItem = (itemToSave) => {
  let womenItems = new WomenItems(itemToSave);
  return womenItems.save();
};

const getAllItems = () => {
  return WomenItems.find();
};

const getItemById = (id) => {
  return WomenItems.findById(id);
};

const updateItem = (id, ItemToUpdate) => {
  //normalize card
  return WomenItems.findByIdAndUpdate(id, ItemToUpdate, {
    new: true,
  });
};

const deleteItem = (id) => {
  return WomenItems.findByIdAndDelete(id);
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
