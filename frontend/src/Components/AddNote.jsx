import React, { useContext, useState } from "react";
import NoteContext from "../Context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = () => {
    addNote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
    props.showAlert("New note added successfully", "success");
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="AddNoteHome">
      <div className="my-new-note">
        <h2>Add a new note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={3}
              required
              value={note.title}
            />
            {/* <p style={{ color: "red" }}>Title cannot be less than 3 characters</p> */}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              rows={4}
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              value={note.description}
              required
            />
            {/* <p style={{ color: "red" }}>Title cannot be less than 5 characters</p> */}
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <button
            disabled={note.title.length < 3 || note.description.length < 5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
