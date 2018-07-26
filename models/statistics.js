'use strict';

module.exports = (sequelize, DataTypes) => {
  var Statistics = sequelize.define('Statistics', {
    article_id: DataTypes.INTEGER,
    pv: DataTypes.INTEGER,
    uv: DataTypes.INTEGER
  }, {});
  Statistics.associate = function(models) {
    // associations can be defined here
  };
  return Statistics;
};