//routes 
//=====================================================================

module.exports = function(app) {

const express = require("express");

const app = express;

var path = require("path");

var friends = require("../data/friends.html");

var newFriend = require("../public/survey.html");



    app.get("/api/friends", function(req, res) {
        // res.send(req.params.friends);
        Response.send("this is working")
        // res.json(friends);
    });

    app.post("/api/friends", function(res, req){
        res.json(newFriend);
        });


};

