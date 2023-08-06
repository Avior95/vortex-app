const Joi = require("joi");

const createItemSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  subTitle: Joi.string().min(2).max(256).required(),
  gender: Joi.string().min(2).max(256).required(),
  price: Joi.number().min(2).required(),
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

const validateItemSchema = (userInput) => {
  return createItemSchema.validateAsync(userInput);
};

module.exports = {
  validateItemSchema,
};
