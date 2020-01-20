'use strict';

module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
  });
  return Task;
};
