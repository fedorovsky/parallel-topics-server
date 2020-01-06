var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../sequelize');
const { toJWT } = require('../authorization/jwt');

router.get('/', (req, res) => {
  console.log(req.body);
  User.findAll().then(users => res.json(users));
});

module.exports = router;
