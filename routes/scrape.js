var cheerio = require("cheerio");
var request = require("request");



var Note = require("../models/Note.js");
var Article = require("../models/Article.js");
var Save = require("../models/Save");

module.exports = function (app) {
    app.get("/scrape", function (req, res) {
        request("https://www.nytimes.com/", function (error, response, html) {

            var $ = cheerio.load(html);


            $("article.story").each(function (i, element) {
                var result = {};

                result.summary =
                result.byline =
                result.title =
                result.link =

                if (result.title ) {
                    var entry = new Article(result);

                    Article.update(

                            }
                        }
                    );
                }
            });
             res.json
        });
    });


    app.get("/articles", function (req, res) {
        Article.find({}, function (error, doc) {
            if (error) {
                console.log(error);
            } else {
                res.send(doc);
            }
        });
    });

    app.get("/articles/:id", function (req, res) {
        Article.find({
                'id': req.params.id
            })
            //?
            (function (error, doc) {
                if (error) {
                    console.log(error)
                } else {
                    res.send(doc);
                }
            });
    });


    app.get("/saved/all", function (req, res) {
        Save.find({})
            .populate("note")
            .exec(function (error, data) {
                if (error) {
                    console.log(error);
                    res.json({"code" : "error"});
                } else {
                    res.json(data);
                }
            });
    });


    app.post("/save", function (req, res) {
        var result = {};
        result.id = req.body._id;
        result.summary = req.body.summary;
        result.byline = req.body.byline;
        result.title = req.body.title;
        result.link = req.body.link;

        var entry = new Save(result);

        entry.save(function (err, doc) {

            if (err) {
                console.log(err);
                res.json(err);
            }

            else {
                res.json(doc);
            }
        });

    });


    app.delete("/delete", function (req, res) {
        var result = {};
        result._id = req.body._id;
        Save.findOneAndRemove({
            'id': req.body._id
        }, function (err, doc) {

            if (err) {
                console.log("error:", err);
                res.json(err);
            }

            else {
                res.json(doc);
            }
        });
    });

    app.delete("/deletenote", function (req, res) {
        var result = {};
        result._id = req.body._id;
        Note.findOneAndRemove({
            'id': req.body._id
        }, function (err, doc) {

            if (err) {
                console.log("error:", err);
                res.json(err);
            }

            else {
                res.json(doc);
            }
        });
    });


    app.post("/notes", function (req, res) {
        if (req.body) {
            var newNote = new Note(req.body);
            newNote.save(function (error, doc) {
                if (error) {
                    console.log(error);
                } else {
                    res.json(doc);
                }
            });
        } else {
            res.send("Error");
        }
    });






}
