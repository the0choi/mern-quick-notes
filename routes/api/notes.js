const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/api/notes");
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes'

router.get("/", ensureLoggedIn, notesCtrl.index);

// POST /api/notes (create a note - sign up)
router.post("/", ensureLoggedIn, notesCtrl.create);

module.exports = router;
