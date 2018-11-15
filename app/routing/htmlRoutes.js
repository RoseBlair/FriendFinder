var path = require("path");

function display (req, res) {

    };

module.exports = [
    {url: "/",
    method: "GET",
    handler: displayRoot
},
    {url: "survey", 
    method: "GET",
    handler: displaySurvey}
]
