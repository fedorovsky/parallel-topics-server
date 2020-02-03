const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const Sequelize = require('sequelize');

var auth = require('./routes/auth');
var users = require('./routes/users');
var topics = require('./routes/topics');

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
app.use('/topics', topics);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server was started on port: ${PORT}`);
});

// https://github.com/sequelize/express-example
// https://github.com/AlbertSmit/Grozeries-Server
// https://github.com/VitaliiKulyk/asap
// https://github.com/shaishab/sequelize-express-example
// https://github.com/coding-blocks-archives/Realworld_NodeJS_Sequelize/tree/master/src

// Many to Many
// https://medium.com/@the_ozmic/how-to-create-many-to-many-relationship-using-sequelize-orm-postgres-on-express-677753a3edb5
