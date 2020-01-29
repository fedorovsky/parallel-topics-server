var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { User, Topic } = require('../sequelize');
const { toJWT } = require('../authorization/jwt');

router.get('/', (req, res) => {
  console.log(req.body);
  User.findAll({
    include: [
      {
        model: Topic,
        as: 'topics', // topics: []
      },
    ],
  }).then(users => res.json(users));
});

router.get('/:id', (req, res) => {
  console.log(req.body);
  User.findByPk(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `user does not exist`,
        });
      }
      return res.send(user);
    })
    .catch(error => next(error));
});

module.exports = router;
