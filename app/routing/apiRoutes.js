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



    

    

    app.post("/api/friends", function(req, res, friendRequire) {
        console.log(req.body);
        //  var newFriend = {
        //     name: "Mary Sanders",
        //     photo: "http://static.tvtropes.org/pmwiki/pub/images/AverageMan1.jpg",
        //     scores: [
        //         2, 
        //         3, 
        //         2, 
        //         3, 
        //         2,
        //         3,
        //         2,
        //         3,
        //         2,
        //         3
        //     ]
        // }

        friends.push(newFriend);
        res.json(friends);

    });


    app.get("/api/friends", function(req, res) {
        json.res(newFriend);
        });

};