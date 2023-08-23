const Joi = require("joi");

const createHomePageCategoriesSchema = Joi.object({
  gender: Joi.string().min(2).max(256).required(),
  button: Joi.string().min(2).max(256).required(),
  image: Joi.object().keys({
    url: Joi.string().regex(
      new RegExp(
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
      )
    ),
    alt: Joi.string().min(2).max(256).required(),
  }),
  user_id: Joi.string().hex().length(24),
});

const validateHomePageCategoriesSchema = (userInput) => {
  return createHomePageCategoriesSchema.validateAsync(userInput);
};

module.exports = {
  validateHomePageCategoriesSchema,
};
