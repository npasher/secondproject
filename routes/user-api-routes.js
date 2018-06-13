// Requiring our models
var db = require("../models");

//Route for getting all players in the db.
module.exports = function(app) {
  //   GET route for getting all of the teams
  app.get("/api", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.user.findAll({}).then(function(results) {
      // We have access to the aliens as an argument inside of the callback function
      res.json(results);
      console.log(results);
    });
  });

  //POST route for creating new user
  app.post("/api/newU", function(req, res) {
    if (req.body.status === "wins") {
      var wins = 1;
      var losses = 0;
    } else {
      var wins = 0;
      var losses = 1;
    }
    
    console.log(req.body);
    db.user
      .create({
        userName: req.body.userName,
        email: req.body.email,
        wins: wins,
        losses: losses
      })
      .then(function(results) {
        res.json(results);
      });
  });

 // post route to update wins and losses and track user stats by email at the end of the game.
  app.post("/api/email", function(req, res) {
    var wins;
    var losses;
    db.user
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then(function(res) {
        wins = res.wins;
        losses = res.losses;
        if (req.body.status === "wins") {
          wins++;
        } else {
          losses++;
        }
        db.user.update(
          {
            wins: wins,
            losses: losses
          },
          {
            where: {
              email: req.body.email
            }
          }
        );
      });
  });
};
