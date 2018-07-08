var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var mongoose = require("mongoose");
var logger = require("morgan");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");
var path = require("path");


var Article = require("./models/Article.js");

var app = express();
var Note = require("./models/Note.js");
var Save = require("./models/Save.js");


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("./public"));



app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"));
});







require("./routes/scrape")(app);
require("./routes/html.js")(app);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"));
});


app.listen(5000, function () {
    console.log("App listening on PORT 5000";
});
