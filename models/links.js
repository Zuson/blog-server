'use strict';
module.exports = (sequelize, DataTypes) => {
  const Links = sequelize.define('Links', {
    description: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {});
  Links.associate = function(models) {
    // associations can be defined here
  };
  return Links;
};