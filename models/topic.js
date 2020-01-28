'use strict';

module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Topic', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
  });
  return Task;
};
