const router = require('express').Router();
const fs = require('fs');
const Film = require('../models/Film');
const { createFilmValidation } = require('../validation');
const formidable = require('formidable');
const { duplicationCheck } = require('../actorsDuplicatingCheck');

router.get('/', async (req, res) => {
    try {
        const films = await Film.find();

        res.status(200).send({ data: films });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/add', async (req, res) => {

    try {
        const { error } = createFilmValidation(req.body);

        if (error) {
            const errorResponse = {
                error: error.details[0].message,
            };

            return res.status(400).send(errorResponse);
        }

        const film = new Film({
            title: req.body.title,
            release_year: req.body.release_year,
            format: req.body.format,
            stars: duplicationCheck(req.body.stars),
            image_link: req.body.image_link,
        });

        await Film.collection.insertOne(film);

        res.status(200).send({ data: film });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/delete', async (req, res) => {
    try {
        let film = await Film.findById({ _id: req.query._id });

        if (!film) {
            const errorResponse = {
                error: "Film wasn't found",
            };
            return res.status(400).send(errorResponse);
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
        const sortedFilms = films;

        for (let i = 1; i < sortedFilms.length; i++) {
            let current = sortedFilms[i];
            let j = i - 1;

            while ((j > -1) && (current.title < sortedFilms[j].title)) {
                sortedFilms[j + 1] = sortedFilms[j];
                j--;
            }

            sortedFilms[j + 1] = current;
        }

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
        let form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(400).send(err);
            };

            const result = [];

            if (!files.films_file.path) {
                return res.status(404).send('File not found');
            }

            if (files.films_file.name.split('.')[files.films_file.name.split('.').length - 1] !== 'txt') {
                return res.status(400).send('Wrong file format');
            }

            const data =  fs.readFileSync(files.films_file.path, 'utf8');

            if (!data.length) {
                return res.status(400).send("File is empty");
            }

            let arr = data.split('\n');
            if (arr[arr.length - 1]) {
                arr.push('');
            }

            for (let i = 0; i <= arr.length - 5; i+=5) {
                result.push({
                    title: arr[i].includes(': ') ? arr[i].split(': ')[1] : arr[i].split(':')[1],
                    release_year: arr[i + 1].includes(': ') ? arr[i + 1].split(': ')[1] : arr[i + 1].split(':')[1],
                    format: arr[i + 2].includes(': ') ? arr[i + 2].split(': ')[1] : arr[i + 2].split(':')[1],
                    stars: duplicationCheck(arr[i + 3].includes(': ') ? arr[i + 3].split(': ')[1] : arr[i + 3].split(':')[1]),
                })
            }

            if (result.length) {
                for (item of result) {
                    await Film.collection.insertOne(item);
                }

                res.status(200).send('File uploaded')
            } else {
                res.status(400).send('Something wrong with file');
            }
        });
    } catch (error) {
        res.status(400).send('Bad request');
    }
});

module.exports = router;
