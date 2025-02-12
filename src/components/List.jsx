import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNote,
  completeNote,
  saveEdit,
  startEdit,
  updateEditText,
  toggleMark,
} from "../redux/reducers/toDoReducer";

export default function List({ selectedOption }) {
  const arlist = useSelector((state) => state.todos.list);
  const marks = useSelector((state) => state.todos.chekBoxArr);
  const editMarkIndex = useSelector((state) => state.todos.editMarkIndex);
  const editMarkText = useSelector((state) => state.todos.editText);
  let filteredList = useSelector((state) => state.todos.filteredList);
  const searchValue = useSelector((state) => state.todos.searchValue);

  const dispatch = useDispatch();
  console.log(searchValue);

  if (searchValue == "") {
    filteredList = arlist.filter((el) => {
      if (selectedOption === "Complete") return el.complete;
      if (selectedOption === "Incomplete") return !el.complete;
      return true;
    });
  }

  return (
    <div className="list">
      {filteredList.map((el, index) => (
        <div className="list-element" key={el.id}>
          <div className="list-info">
            <button
              className={
                el.complete ? "list-complete active" : "list-complete "
              }
              onClick={() => dispatch(completeNote({ id: el.id }))}
            ></button>

            <div
              className={`list-mark`}
              onClick={() => dispatch(toggleMark({ id: el.id }))}
            >
              <div
                className={`list-markInside ${!marks[el.id] ? "hidden" : ""}`}
              >
                <svg
                  className="AAA"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_18_421" fill="white">
                    <path d="M4.9978 14.6488L1.72853e-05 9.74756L9.55927 2.22748e-06L14.5571 4.90124L4.9978 14.6488Z" />
                  </mask>
                  <path
                    d="M4.9978 14.6488L3.59745 16.0767L5.02539 17.4771L6.42574 16.0491L4.9978 14.6488ZM6.39816 13.2209L1.40037 8.31962L-1.40034 11.1755L3.59745 16.0767L6.39816 13.2209ZM13.1291 3.50089L3.56986 13.2484L6.42574 16.0491L15.985 6.30159L13.1291 3.50089Z"
                    fill="#F7F7F7"
                    mask="url(#path-1-inside-1_18_421)"
                  />
                </svg>
              </div>
            </div>

            {editMarkIndex == el.id ? (
              <input
                type="text"
                value={editMarkText}
                onChange={(event) =>
                  dispatch(updateEditText({ text: event.target.value }))
                }
              />
            ) : (
              <h2
                className={`list-tittle ${
                  !marks[el.id] ? "" : `list-line listTittleLine`
                }`}
              >
                {el.text}
              </h2>
            )}
          </div>
          <div className="list-actions">
            {editMarkIndex == el.id ? (
              <div>
                <button
                  onClick={() => dispatch(saveEdit({ el: el, index: index }))}
                >
                  save
                </button>
              </div>
            ) : (
              <>
                <button
                  className="list-edit"
                  onClick={() => dispatch(startEdit(el))}
                >
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736"
                      stroke="#CDCDCD"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="list-delete"
                  onClick={() => dispatch(deleteNote({ id: el.id }))}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z"
                      stroke="#CDCDCD"
                    />
                    <path
                      d="M14.625 3.75H3.375"
                      stroke="#CDCDCD"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
                      stroke="#CDCDCD"
                    />
                    <path
                      d="M10.5 9V12.75"
                      stroke="#CDCDCD"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.5 9V12.75"
                      stroke="#CDCDCD"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
