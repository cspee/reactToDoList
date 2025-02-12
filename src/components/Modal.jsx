import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/reducers/toDoReducer";

export default function Modal({ open, onClose}) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const newList = useSelector((state) => state.todos.list);

  const doAddNote = () => {
    dispatch(addNote({ text }));
  };
  function onChange(event) {
    setText(event.target.value);
  }

  function handleAddNote() {
    doAddNote();
    onClose();
  }
  return (
    <div className={`modal ${!open ? "hidden" : ""}`}>
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-tittle">NEW NOTE</h3>
          <input
            type="text"
            className="modal-input"
            placeholder="Input your note..."
            value={text}
            onChange={onChange}
          />
        </div>

        <div className="modal-body">
          <button className="modal-cancelBtn" onClick={onClose}>
            CANCEL
          </button>
          <button className="modal-applyBtn" onClick={handleAddNote}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
}
