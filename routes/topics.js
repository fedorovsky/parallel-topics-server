var express = require('express');
var router = express.Router();
const { Topic } = require('../sequelize');

router.post('/create', (req, res) => {
  console.log('[Topic CREATE]', req.body);
  Topic.create(req.body).then(task => {
    console.log('[Topic CREATE SUCCESS]', task);
    res.json(task);
  });
});

module.exports = router;
