const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const Sequelize = require('sequelize');

var auth = require('./routes/auth');
var users = require('./routes/users');

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Rotes
 */
app.use('/auth', auth);
app.use('/users', users);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server was started on port: ${PORT}`);
});

// https://github.com/sequelize/express-example
// https://github.com/AlbertSmit/Grozeries-Server
// https://github.com/VitaliiKulyk/asap

// https://medium.com/@CaptainFuntastic/sequelize-migrations-with-relations-a8fd40a0912b
