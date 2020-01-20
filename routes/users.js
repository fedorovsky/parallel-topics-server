var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { User, Task } = require('../sequelize');
const { toJWT } = require('../authorization/jwt');

router.get('/', (req, res) => {
  console.log(req.body);
  User.findAll({
    include: [
      {
        model: Task,
        as: 'tasks', // tasks: []
      },
    ],
  }).then(users => res.json(users));
});

module.exports = router;
