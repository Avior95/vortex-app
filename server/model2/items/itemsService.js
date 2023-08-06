const Item = require("./Item");

const createItem = (itemToSave) => {
  let item = new Item(itemToSave);
  return item.save();
};

const getAllItems = () => {
  return Item.find();
};

const getItemById = (id) => {
  return Item.findById(id);
};

const updateCard = (id, ItemToUpdate) => {
  //normalize card
  return Item.findByIdAndUpdate(id, ItemToUpdate, {
    new: true,
  });
};

const deleteItem = (id) => {
  return Item.findByIdAndDelete(id);
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateCard,
  deleteItem,
};
