var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../sequelize');
const { toJWT } = require('../authorization/jwt');

router.post('/register', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(passwordHash => {
    req.body.password = passwordHash;
    User.create(req.body)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: `user does not exist`,
          });
        }
        console.log('[REGISTER SUCCESS]', req.body);
        return res.status(201).send({
          jwt: toJWT({ id: user.id, name: user.name, email: user.email }),
          id: user.id,
          name: user.name,
          email: user.email,
        });
      })
      .catch(error => next(error));
  });
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).send({
      message: 'Please supply a valid email and password',
    });
  } else {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then(user => {
        if (!user) {
          res.status(400).send({
            message: 'User with that email does not exist',
          });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
          console.log('[LOGIN SUCCESS]', user);
          res.send({
            jwt: toJWT({ id: user.id, name: user.name, email: user.email }),
            id: user.id,
            name: user.name,
            email: user.email,
          });
        } else {
          res.status(400).send({
            message: 'Password was incorrect',
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({
          message: 'Something went wrong',
        });
      });
  }
});

module.exports = router;
