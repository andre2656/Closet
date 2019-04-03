'use strict';
module.exports = (sequelize, DataTypes) => {
  const MotivationalQuotes = sequelize.define('MotivationalQuotes', {
    quote: DataTypes.STRING
  }, {});
  MotivationalQuotes.associate = function(models) {
    // associations can be defined here
  };
  return MotivationalQuotes;
};