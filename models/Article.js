var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Article = mongoose.model("Article", ArticleSchema);

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  link: {
    type: String
  },
  summary: {
    type: String,
  },
   byline: {
   type: String,
  },
  note: [{
    type: Schema.Types.ObjectId
  }]
});



module.exports = Article;
