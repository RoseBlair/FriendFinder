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

//routes 
//=====================================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
    // res.send("is this working?");
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

 app.get("/api/friends", function(req, res) {
    //  res.send(req.params.friends);
     res.json(friends);
 });

app.post("/api/friends", function(req, res) {
    console.log(req.body);
     var newFriend = {
        name: "Mary Sanders",
        photo: "http://static.tvtropes.org/pmwiki/pub/images/AverageMan1.jpg",
        scores: [
            2, 
            3, 
            2, 
            3, 
            2,
            3,
            2,
            3,
            2,
            3
        ]
    }

    friends.push(newFriend);
    res.json(friends);

 });




//listener
//======================================================================

app.listen(PORT, function() {
    console.log("app listening on port " + PORT);
    });