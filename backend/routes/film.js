const router = require('express').Router();
const fs = require('fs');
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
        let film = await Film.findById({ _id: req.query._id });

        if (!film) {
            return res.status(400).send("Film wasn't found");
        }

        await Film.collection.deleteOne({ _id: film._id });

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

router.post('/upload', async (req, res) => {
    try {
        const result = [];

        if (!req.files.films_file.path) {
            return res.status(404).send('File not found');
        }

        const data =  fs.readFileSync(req.files.films_file.path, 'utf8');

        let arr = data.split('\n');
        if (arr[arr.length - 1]) {
            arr.push('');
        }

        for (let i = 0; i <= arr.length - 5; i+=5) {
            result.push({
                title: arr[i].includes(': ')[1] ? arr[i].split(': ')[1] : arr[i].split(':')[1],
                release_year: arr[i + 1].includes(': ') ? arr[i + 1].split(': ')[1] : arr[i + 1].split(':')[1],
                format: arr[i + 2].includes(': ') ? arr[i + 2].split(': ')[1] : arr[i + 2].split(':')[1],
                stars: arr[i + 3].includes(': ') ? arr[i + 3].split(': ')[1] : arr[i + 3].split(':')[1],
            })
        }

        if (result.length) {
            await Film.collection.insertMany(result);

            res.status(200).send('File uploaded')
        } else {
            res.status(400).send('Something wrong with file');
        }
    } catch (error) {
        res.status(400).send('Bad request');
    }
});

module.exports = router;
