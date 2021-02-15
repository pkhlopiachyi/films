const router = require('express').Router();
const User = require('../models/User');
const { createUserValidation } = require('../validation');

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req;

        if (!email) {
            return res.status(400).send({ error: 'Email is missing' });
        }

        if (!password) {
            return res.status(400).send({ error: 'Password is missing' });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send({ error: 'User doesn\'t exist '});
        }

        if (password !== user.password) {
            return res.status(400).send({ error: 'Passworn is incorrect'});
        }

        return res.status(200).send({ data: user });

    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/register', async (req, res) => {
    try {
        const { error } = createUserValidation(req.body);

        if (error) {
            return res.status(400).send({ error: error.details[0].message});
        }

        const user = new User(req.body);

        await User.collection.insertOne(user);

        return res.status(200).send({ login: 'success' });
    } catch (error) {
        res.status(400).send(error);
    }
});
