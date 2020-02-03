const express = require('express');
const router = express.Router();
const { Theme } = require('../sequelize');

router.post('/create', (req, res) => {
  console.log('[Topic CREATE]', req.body);
  Theme.create(req.body).then(theme => {
    console.log('[Theme CREATE SUCCESS]', theme);
    res.json(theme);
  });
});

router.get('', (req, res) => {
  Theme.findAll(req.body).then(list => {
    res.json(list);
  });
});

module.exports = router;
