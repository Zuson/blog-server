'use strict';

module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING, // 名称
    alias: DataTypes.STRING, // 别名
    icon: DataTypes.STRING // icon
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};