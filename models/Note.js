var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Note = mongoose.model("Note", NoteSchema);

var NoteSchema = new Schema({
  article_id: {
    type: Schema.Types.ObjectId
  },
  body: {
    type: String
  }
});

module.exports = Note;
