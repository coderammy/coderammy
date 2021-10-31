const Joi = require("joi");


const authSchema = Joi.object({
    Name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.number().required().min(10),
    Gender: Joi.string()
});

const authValidate = async (req, res, next) => {
    await authSchema.validateAsync(req.body)
        .then(() => next())
        .catch((error) => res.send(error.message))
};

module.exports = { authSchema, authValidate };