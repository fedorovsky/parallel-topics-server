'use strict';

module.exports = (sequelize, DataTypes) => {
  var Theme = sequelize.define('Theme', {
    name: DataTypes.STRING,
  });
  return Theme;
};
