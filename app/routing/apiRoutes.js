//routes 
//=====================================================================

var path = require("path");

var friends = require("../data/friends.html");

var newFriend = require("../public/survey.html");



module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        //  res.send(req.params.friends);
        res.json(friends);
    });

    app.post("/api/friends", function(res, req){
        res.json(newFriend);
        });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "home.html"));
        // res.send("is this working?");
        });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "data", "survey.html"));
        });


};