const Note = require("../../models/note");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  try {
    let notes = await Note.find({ user: req.user._id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function create(req, res) {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}
