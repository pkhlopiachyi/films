const Joi = require('@hapi/joi');

const createFilmValidation = data => {
    const schema = Joi.object({
        title: Joi.string().min(2).max(255),
        release_year: Joi.number().min(1895),
        format: Joi.string(),
        stars: Joi.string(),
        image_link: Joi.string().optional().allow(''),
    });

    return schema.validate(data);
}

module.exports.createFilmValidation = createFilmValidation;