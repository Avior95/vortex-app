const config = require("config");
const joiHomePageCategoriesValidation = require("./joi/homePageCategories");
const joiIdValidation = require("./joi/idValidation");

const validatorOption = config.get("validatorOption");

const createHomePageCategoriesValidation = (userInput) => {
  if (validatorOption === "Joi") {
    return joiHomePageCategoriesValidation.validateHomePageCategoriesSchema(
      userInput
    );
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
  createHomePageCategoriesValidation,
  idValidation,
};
