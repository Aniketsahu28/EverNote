import React, { useState } from "react";
import NoteContext from "./NoteContext";
const BACKEND_URL = process.env.BACKEND_URL;

const NotesState = (props) => {
  const notesInitial = [];

  const [notes, setnotes] = useState(notesInitial);

  //Get all note
  const getNote = async () => {
    //API call
    const response = await fetch(`${BACKEND_URL}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setnotes(json);
  };

  //Add a new note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${BACKEND_URL}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setnotes(notes.concat(note));
  };

  //Delete an existing note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${BACKEND_URL}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    if (!response.ok) throw Error("Failed to Delete Note");

    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNote);
  };

  //Update a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${BACKEND_URL}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    if (!response.ok) throw Error("Failed to Update Note");

    let newNote = JSON.parse(JSON.stringify(notes));
    //editing note on client side
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setnotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NotesState;
