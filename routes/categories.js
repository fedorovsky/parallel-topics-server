const express = require('express');
const router = express.Router();
const { Category, Topic } = require('../sequelize');

router.get('/', async (req, res) => {
  try {
    const category = await Category.findAll({
      include: [{ model: Topic }],
    });
    res.json(category);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/create', (req, res) => {
  Category.create(req.body).then(category => {
    res.json(category);
  });
});

router.post('/add-topic/', async (req, res) => {
  const category = await Category.findByPk(1);
  const topic = await Topic.findByPk(1);

  const categoryWithTopic = await category.addTopic(topic);

  res.json(categoryWithTopic);
});

module.exports = router;
