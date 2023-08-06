const config = require("config");
const joiItemsValidation = require("./joi/itemsValidation");
const joiIdValidation = require("./joi/idValidation");

const validatorOption = config.get("validatorOption");

const createItemValidation = (userInput) => {
  if (validatorOption === "Joi") {
    return joiItemsValidation.validateItemSchema(userInput);
  }

  throw new Error("validator undefined");
};
const idValidation = (userInput) => {
  if (validatorOption === "Joi") {
    return joiIdValidation.validateIdSchema(userInput);
  }
  throw new Error("validator undefined");
};

module.exports = {
  createItemValidation,
  idValidation,
};
