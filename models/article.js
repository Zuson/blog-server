'use strict';

module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING, // 标题
    cover: DataTypes.STRING, // 背景
    content: DataTypes.TEXT, // 内容
    summary: DataTypes.TEXT //  摘要
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};