var express = require("express");

var app = express();

var PORT = 3000;
app.set('port', process.env.PORT || 3000);

var path = require("path");

var friends = require("./app/data/friends.js");

// Parse application information
//========================================================

var bodyParser = require('body-parser')
 
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
 
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html' }))



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./routing/apiRoutes")(app);


require("./routing/htmlRoutes")(app);





//listener
//======================================================================

app.listen(PORT, function() {
    console.log("app listening on port " + PORT);
    });