const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const formidable = require('express-formidable');
const filmRoute = require('./routes/film');

dotenv.config();

mongoose.connect(
    process.env.ATLAS_URI,
    {useNewUrlParser: true, useCreateIndex: true},
    () => console.log('connected to db')
);

const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(formidable());

app.use('/api/film', filmRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
