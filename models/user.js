'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    password: DataTypes.STRING,
    nick_name: DataTypes.STRING(11)
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};