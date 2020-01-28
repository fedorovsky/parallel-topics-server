const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const TopicModel = require('./models/topic');

const sequelize = new Sequelize(
  'parallel-topics',
  'parallel-topics',
  'ZXCvbnmzxc123',
  {
    host: '109.86.230.100',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT0',
    },
  },
);
sequelize
  .authenticate()
  .then(() => {
    console.log('[SEQUELIZE] [Connection has been established successfully]');
  })
  .catch(err => {
    console.error('[SEQUELIZE] [Unable to connect to the database:]', err);
  });

const User = UserModel(sequelize, Sequelize);
const Topic = TopicModel(sequelize, Sequelize);

/**
 * Associations
 */
User.hasMany(Topic, { as: 'topics' });
Topic.belongsTo(User);

/**
 * Sync
 */
sequelize.sync({ force: true }).then(() => {
  console.log(`[SEQUELIZE] [Sync Success]`);
});

module.exports = {
  User,
  Topic,
};
