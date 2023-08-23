const MenItems = require("./homePageMen");

const createItem = (itemToSave) => {
  let menItems = new MenItems(itemToSave);
  return menItems.save();
};

const getAllItems = () => {
  return MenItems.find();
};

const getItemById = (id) => {
  return MenItems.findById(id);
};

const updateItem = (id, ItemToUpdate) => {
  //normalize card
  return MenItems.findByIdAndUpdate(id, ItemToUpdate, {
    new: true,
  });
};

const deleteItem = (id) => {
  return MenItems.findByIdAndDelete(id);
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
