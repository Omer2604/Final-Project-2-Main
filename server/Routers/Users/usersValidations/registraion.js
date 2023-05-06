const Joi = require("joi");

function validateRegistration(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string()
      .min(8)
      .required()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{4,})(?=.*[!@#$%^&*])(?=.{8,})/),
    biz: Joi.boolean(),
  });

  return schema.validate(user);
}

module.exports = validateRegistration;
