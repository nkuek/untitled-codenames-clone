'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameWord = sequelize.define('GameWord', {
    wordId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  GameWord.associate = function(models) {
    // associations can be defined here
  };
  return GameWord;
};