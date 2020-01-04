const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const Sequelize = require('sequelize');

var users = require('./routes/users');

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Rotes
 */
app.use('/users', users);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server was started on port: ${PORT}`);
});

// https://github.com/sequelize/express-example
