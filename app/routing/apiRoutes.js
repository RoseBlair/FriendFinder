//routes 
//=====================================================================

var path = require("path");

var friends = require("../data/friends.html");

var surveys = require("../public/data/survey.html");

function displayFriends(req, res) {
    res.json(friends.data);
}

function newFriend (req, res) {
    var entry = {
        name: req.body.namme,
        photo: req.body.photo,
        scores: []
    }
};




app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
    // res.send("is this working?");
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
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

 app.post("/api/friends", function(req, res) {
    console.log(formData);
    

    friends.push(formData);
    res.json(friends);

 });
