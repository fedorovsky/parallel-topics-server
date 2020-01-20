var express = require('express');
var router = express.Router();
const { Task } = require('../sequelize');

router.post('/create', (req, res) => {
  console.log('[TASK CREATE]', req.body);
  Task.create(req.body).then(task => {
    console.log('[TASK CREATE SUCCESS]', task);
    res.json(task);
  });
});

module.exports = router;
