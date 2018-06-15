// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //index route loads game.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // // Route to the index page
  // app.get("/index", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // // blog route loads main.html
  // app.get("/main", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/main.html"));
  // });

};