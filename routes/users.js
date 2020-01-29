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

router.put('/:id', async (req, res) => {
  console.log('[UPDATE]', req.body, req.params.id);
  try {
    const { id } = req.params;
    const { name } = req.body;
    const [updated] = await User.update({ name }, { where: { id } });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      // const t = await Topic.create({ title: '111111111111111' });
      // console.log('[updatedUser]', updatedUser.addTopic(t));
      return res.status(200).json(updatedUser);
    }
    return res.status(404).send({
      message: `user does not exist id:${id}`,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
