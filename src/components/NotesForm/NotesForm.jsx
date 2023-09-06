import * as usersService from '../../utilities/users-service';
import {useState} from "react"
import axios from "axios";


export default function NotesForm(props) {
    const [note, setNote] = useState("");

    async function handleSubmit(evt){
        evt.preventDefault();
        const newNote = {text: note, user: props.user };
        const token = usersService.getToken();

        try {
            const response = await axios.post("api/notes", newNote, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setNote("");
                props.onAddNote(response.data);
            }
        } catch (err) {
            console.log(err)
        }
    };

    return (
      <div className="form-container"> 
          <form autoComplete="off" onSubmit={handleSubmit}>
            <textarea 
                name="text" 
                required
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button type="submit" >Add Note</button>
          </form>
      </div>
    );
}