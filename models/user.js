module.exports = (sequelize, type) => {
  var User = sequelize.define('User', {
    username: type.STRING,
  });
  return User;
};
