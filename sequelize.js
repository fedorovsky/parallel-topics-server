const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const TopicModel = require('./models/topic');
const ThemeModel = require('./models/theme');

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
const Theme = ThemeModel(sequelize, Sequelize);

/**
 * Associations
 */
User.hasMany(Topic, { as: 'topics' });
Topic.belongsTo(User);

Topic.belongsToMany(Theme, { through: 'TopicThemes' });
Theme.belongsToMany(Topic, { through: 'TopicThemes' });

/**
 * Sync
 */
sequelize.sync({ force: true }).then(() => {
  console.log(`[SEQUELIZE] [Sync Success]`);
});

module.exports = {
  User,
  Topic,
  Theme,
};
