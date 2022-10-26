require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Note = require("./models/noteModel");

const app = express();
app.use(express.json());
app.use(cors());
// To parse the data coming in the url and put into req object
app.use(express.urlencoded({ extended: true }));

const dbURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.y29is.mongodb.net/Evernote?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("DB Connected");
    app.listen(5000);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Yayy its working");
});

app.get("/addnote", async (req, res) => {
  try {
    const newNote = new Note({
      title: "Dummy",
      description: "Testing the db",
      archive: "1",
    });

    const response = await newNote.save();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});
