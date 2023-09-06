import {useState, useEffect} from "react";
import axios from "axios";
import NotesForm from '../../components/NotesForm/NotesForm';
import * as usersService from '../../utilities/users-service';

export default function AllNotesPage(props) {  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    try {
      const token = usersService.getToken();
      const response = await axios.get("api/notes", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      });
      setNotes(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  function handleAddNote(newNote) {
    setNotes([...notes, newNote]);
  }

  return (
    <>
      <h1>All Notes</h1>
      <NotesForm user={props.user} onAddNote={handleAddNote} />
      {notes.length === 0 ? 
        <p>No Notes Yet!</p>
      :
        notes.map(note => 
          <div className="note" key={note._id}>
            <p>{note.text}</p>
            <p>{new Date (note.createdAt).toLocaleString()}</p>
          </div>)
      }
    </>
  );
}