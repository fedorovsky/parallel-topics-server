const express = require('express');
const router = express.Router();
const { Theme, Topic } = require('../sequelize');

router.get('/', async (req, res) => {
  try {
    const theme = await Theme.findAll({
      include: [{ model: Topic }],
    });
    res.json(theme);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/create', (req, res) => {
  Theme.create(req.body).then(theme => {
    res.json(theme);
  });
});

router.post('/add-topic/', async (req, res) => {
  const theme = await Theme.findByPk(1);
  const topic = await Topic.findByPk(1);

  const themeWithTopic = await theme.addTopic(topic);

  res.json(themeWithTopic);
});

module.exports = router;
