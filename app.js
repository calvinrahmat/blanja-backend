require('dotenv/config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const main = require('./src/main');
const cors = require('cors');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(main);

module.exports = app;
