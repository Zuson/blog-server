'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      primarykey: true
    },
    password: {
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};