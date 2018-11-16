var path = require("path");

var htmlRoutes = function (app) {
    // app.get("/", function (req, res) {
    //     res.sendFile(path.join(__dirname, "app/public/home.html"))
    //     });

    // app.get("/survey", function (req, res) {
    //     res.sendFile(path.join(__dirname, "app/public/survey.html"))
    //     });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
        });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
        });

    

};

module.exports = htmlRoutes;

// function display (req, res) {

//     };

// module.exports = [
//     {url: "/",
//     method: "GET",
//     handler: displayRoot
// },
//     {url: "survey", 
//     method: "GET",
//     handler: displaySurvey}
// ]
