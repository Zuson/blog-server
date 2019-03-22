'use strict';
module.exports = (sequelize, DataTypes) => {
  var Statistic = sequelize.define('Statistic', {
    article_id: DataTypes.STRING, // 文章id
    pv: DataTypes.INTEGER,
    uv: DataTypes.INTEGER
  }, {});
  Statistic.associate = function(models) {
    // associations can be defined here
  };
  return Statistic;
};