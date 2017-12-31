

// Path npm //

var path = require("path");

module.exports = function(app){

//  Include two routes:

// Route --> Display Survey //

app.get("/survey", function (req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"));

});

// Default --> Home  // 

app.get("*", function (req,res){
    res.sendFile(path.join(__dirname,"../public/home.html"));

});
};





