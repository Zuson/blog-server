'use strict';

module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT, // 内容
    name: DataTypes.STRING, // 名字
    url: DataTypes.STRING, // url
    email: DataTypes.STRING // email
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};