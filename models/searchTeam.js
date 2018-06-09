// Makes the searchTeam Model available for other files (will also create a table)

module.exports = function(sequelize, DataTypes) {
  var searchTeam = sequelize.define("teams", {
    teamName: DataTypes.STRING,
    defenseVal: DataTypes.INTEGER,
    offenseVal: DataTypes.INTEGER,
    stealthVal: DataTypes.INTEGER,
    charmVal: DataTypes.INTEGER,
  });
  return searchTeam;
};

