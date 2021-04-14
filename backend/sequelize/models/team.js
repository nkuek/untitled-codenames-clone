'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    spymaster: DataTypes.INTEGER,
    agent: DataTypes.INTEGER
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};