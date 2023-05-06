const Joi = require("Joi");

function validateSignIn(req) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string()
      .min(8)
      .required()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]{4,})(?=.*[!@#$%^&*])(?=.{8,})/),
  });

  return schema.validate(req);
}

module.exports = validateSignIn;
