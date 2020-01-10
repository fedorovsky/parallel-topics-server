'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: {
        type: DataTypes.STRING(126).BINARY,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: {
          args: true,
          msg: 'Email address already in use!',
        },
      },
    },
    {},
  );
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Task);
  };
  return User;
};
