// Requiring our models
var db = require("../models");


//Routes
module.exports = function(app) {
//   GET route for getting all of the teams
  app.get("/api/locations", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.locations.findAll({}).then(function(results) {
      // We have access to the aliens as an argument inside of the callback function
      res.json(results);
      console.log(results);
    });
  });
};
