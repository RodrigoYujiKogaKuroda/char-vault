import Joi from 'joi';

export const characterSchema = Joi.object({
    name: Joi.string().required(),
    race: Joi.string().required(),
    class: Joi.string().required(),
    level: Joi.number().min(1).max(20).required()
})