var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Save = mongoose.model("Save", SaveSchema);

var SaveSchema = new Schema({
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
 note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


module.exports = Save;
