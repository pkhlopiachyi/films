const router = require('express').Router();
const { filter } = require('core-js/fn/array');
const Film = require('../models/Film');
const { createFilmValidation } = require('../validation');

router.get('/', async (req, res) => {
    try {
        const films = await Film.find();

        res.status(200).send({ data: films });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/add', async (req, res) => {
    const { error } = createFilmValidation(req.body);

    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    const film = new Film({
        title: req.body.title,
        release_year: req.body.release_year,
        format: req.body.format,
        stars: req.body.stars,
        image_link: req.body.image_link,
    });

    try {
        await Film.collection.insertOne(film);

        res.status(200).send({ data: film });
    } catch (error) {
        res.status(400).send(err);
    }
});

router.delete('/delete', async (req, res) => {
    try {
        const film = await Film.findById({ _id: req.query._id });

        if (!film) {
            return res.status(400).send("Film wasn't found");
        }

        await Film.collection.deleteOne(film)
        res.status(200).send({ data: film });
    } catch (error) {
        res.status(400).send(error);
    }
});


router.get('/alphabet', async (req, res) => {
    try {
        const films = await Film.find();
        const sortedFilms = films.sort((first, second) => first.title > second.title);

        res.status(200).send({ data: sortedFilms })
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/search', async (req, res) => {
    try {
        const films = await Film.find();
        const searchedFilms = films.filter(film => film.title.toLowerCase().includes(req.query.value.toLowerCase())
            || film.stars.toLowerCase().includes(req.query.value.toLowerCase()));

        res.status(200).send({ data: searchedFilms });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
