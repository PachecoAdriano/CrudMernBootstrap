//Load env variables
if (process.eventNames.NODE_ENV != "production") {
  require("dotenv").config();
}

//Import dependencies
const express = require("express");
const connectToDB = require("./config/connectToDB");
const cors = require('cors')
const notesController = require("./controllers/notesController");

//Create an express app
const app = express();

//Configure express app
app.use(express.json());
app.use(cors())

//Connect to Database
connectToDB();

//Routing

app.get("/notes", notesController.fetchNotes);

app.get("/notes/:id", notesController.fetchNote);

app.post("/notes", notesController.createNote);

app.put("/notes/:id", notesController.updateNote);

app.delete("/notes/:id", notesController.deleteNote);

//Start our server
app.listen(process.env.PORT);
