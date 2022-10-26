const mongoose = require("mongoose");

const NoteScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    archive: {
      type: Number,
      required: true,
      default: "0",
    },
  },
  { timestamps: true }
);

// module.exports(mongoose.model("Note", NoteScheme));
const Note = mongoose.model("Note", NoteScheme);
module.exports = Note;
