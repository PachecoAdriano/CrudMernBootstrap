const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  //Find the notes
  const notes = await Note.find();

  //respond with them
  res.json({ notes: notes });
};

const fetchNote = async (req, res) => {
  //Get id off the URL
  const noteID = req.params.id;

  //Find the note using that ID
  const note = await Note.findById(noteID);

  //Respond with the note
  res.json({ note: note });
};

const createNote = async (req, res) => {
  //Get the sent in data off request body
  const title = req.body.title;
  const body = req.body.body;

  //Create a note with it
  const note = await Note.create({
    title: title,
    body: body,
  });

  // Respond with the new note
  res.json({ note: note });
};

const updateNote = async (req, res) => {
  //Get id off the URL
  const noteID = req.params.id;

  //get the data off the req body
  const title = req.body.title;
  const body = req.body.body;

  //Find and update the record
  await Note.findByIdAndUpdate(noteID, {
    title: title,
    body: body,
  });

  //Find updated note
  const note = await Note.findById(noteID);

  //Respond with it
  res.json({ note: note });
};

const deleteNote = async (req, res) => {
  //Get ID off the URL
  const noteID = req.params.id;

  //Delete the record
  await Note.deleteOne({ id: noteID });

  //Respond
  res.json("record deleted");
};

module.exports = {
  fetchNote: fetchNote,
  fetchNotes: fetchNotes,
  createNote: createNote,
  updateNote: updateNote,
  deleteNote: deleteNote,
};
