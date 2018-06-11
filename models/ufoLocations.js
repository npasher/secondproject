// Makes the searchTeam Model available for other files (will also create a table)

module.exports = function(sequelize, DataTypes) {
  var locations = sequelize.define("locations", {
    country: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    wt: DataTypes.INTEGER,
    wtPer: DataTypes.DECIMAL(10,2),
    comfort: DataTypes.INTEGER,
    comfPer: DataTypes.DECIMAL(10,2),
    armor: DataTypes.INTEGER,
    armorPer: DataTypes.DECIMAL(10,2),
    weapons: DataTypes.INTEGER,
    weapPER: DataTypes.DECIMAL(10,2),
    tools: DataTypes.INTEGER,
    toolsPer: DataTypes.DECIMAL(10,2),
    timeofday: DataTypes.INTEGER,
    timeofdayPer: DataTypes.DECIMAL(10,2),
  });
  return locations;
};