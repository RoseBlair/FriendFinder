var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

var path = require("path");

// var friends = require("./app/data/friends.js");

// Parse application information
//========================================================

var bodyParser = require('body-parser')
 
app.use(bodyParser.urlencoded({ extended: true }))
 
app.use(bodyParser.json())
 
// app.use(bodyParser.json({ type: 'application/*+json' }))

// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// app.use(bodyParser.text({ type: 'text/html' }))



// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



// var htmlPath = path.join("app", "data", "routing", "apiRoutes.html");

// var apiPath = path.join("app", "data", "routing", "htmlRoutes.html");
require ("./app/routing/apiRoutes")(app);
require ("./app/routing/htmlRoutes")(app);

//listener
//======================================================================

app.listen(PORT, function() {
    console.log("app listening on port " + PORT);
    });