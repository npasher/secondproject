// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
<<<<<<< HEAD
var express = require("express");
var bodyParser = require("body-parser");
// var env = require('dotenv');
=======
const express=require("express");
const bodyParser=require("body-parser");
const env=require('dotenv');
>>>>>>> 2857c642286098017a1e5117bf41346e8662c194
// Sets up the Express App
// =============================================================
const app=express();
const PORT=process.env.PORT || 7000;

// Requiring our models for syncing
const db=require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
<<<<<<< HEAD
db.sequelize.sync({ force: true }).then(function() {
=======
db.sequelize.sync({force: false}).then(function(){
>>>>>>> 2857c642286098017a1e5117bf41346e8662c194
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});