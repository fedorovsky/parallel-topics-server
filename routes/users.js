var express = require('express');
var router = express.Router();
const { User } = require('../sequelize');

router.get('/', (req, res) => {
  console.log(req.body);
  User.findAll().then(users => res.json(users));
});

module.exports = router;
