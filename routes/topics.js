var express = require('express');
var router = express.Router();
const { Topic } = require('../sequelize');

router.get('/', (req, res) => {
  Topic.findAll().then(topic => {
    res.json(topic);
  });
});

router.post('/create', (req, res) => {
  Topic.create(req.body).then(topic => {
    res.json(topic);
  });
});

module.exports = router;
