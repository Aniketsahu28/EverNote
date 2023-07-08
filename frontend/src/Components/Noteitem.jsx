import React, { useContext } from "react";
import NoteContext from "../Context/notes/NoteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-4">
      <div className="card text-center my-3" style={{ borderRadius: "10px" }}>
        <div className="card-header d-flex align-items-center justify-content-between" style={{ backgroundColor: "#25AEDA" }}>
          <h5 className="card-title">{note.title}</h5>
          <div>
            <lord-icon
              //Edit document icon
              src="https://cdn.lordicon.com/rfbqeber.json"
              trigger="hover"
              colors="primary:#848484,secondary:#3080e8,tertiary:#ffffff"
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
                marginRight: "-10px",
              }}
              onClick={() => {
                updateNote(note);
              }}
            />
            <lord-icon
              //Delete icon
              src="https://cdn.lordicon.com/exkbusmy.json"
              trigger="hover"
              colors="outline:#121331,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            />
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{note.description}</p>
        </div>
        <div className="card-footer text-body-secondary"><strong>Tags: </strong>{note.tag}</div>
      </div>
    </div>
  );
};

export default Noteitem;
