const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const filmRoute = require('./routes/film');
const userRoute = require('./routes/user');
const socketWrapper = require('./sockets/socketIo');

dotenv.config();

mongoose.connect(
    process.env.ATLAS_URI,
    {useNewUrlParser: true, useCreateIndex: true},
    () => console.log('connected to db')
);

const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/film', filmRoute);

socketWrapper.init();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
