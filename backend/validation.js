const Joi = require('@hapi/joi');
const { GENDERS } = require('./constants');

const createFilmValidation = data => {
    const schema = Joi.object({
        title: Joi.string().min(2).max(255),
        release_year: Joi.number().min(1850).max(2020),
        format: Joi.string(),
        stars: Joi.string(),
        image_link: Joi.string().optional().allow(''),
    });

    return schema.validate(data);
}

const createUserValidation = data => {
    const schema = Joi.object({
        username: Joi.string().min(4).max(255),
        email: Joi.string().email().min(4).max(255),
        gender: Joi.options(GENDERS),
        birthday: Joi.date(),
        password: Joi.string().min(5).max(255)
    });

    return schema.validate(data);
}

const duplicationCheck = stars => {
    const actors = stars.split(', ');

    return actors.filter((actor, index) => actors.indexOf(actor) === index).join(', ');
}

module.exports = {
    createFilmValidation,
    createUserValidation,
    duplicationCheck
};
