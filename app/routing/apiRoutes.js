//routes 
//=====================================================================

module.exports = function(app) {

var friends = require("../data/friends");

    app.get("/api/friends", function(req, res) {
        // res.send(req.params.friends);
        res.json(friends)
    });

    app.post("/api/friends", function(req, res){
        function findTheBest() {
            
        };
        
        res.json(friends[0]);
        });


};

