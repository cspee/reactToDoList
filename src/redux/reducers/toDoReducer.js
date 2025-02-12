import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    theme: "white",
    editText: "",
    editMarkIndex: null,
    chekBoxArr: {},
    filteredList: [],
    searchFilteredList: [],
    searchValue: "",
    selectedOption: "",
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme == "white" ? "dark" : "white";
    },

    addNote(state, action) {
      state.list.push({
        id: Date.now(),
        text: action.payload.text,
        complete: false,
      });
    },

    deleteNote(state, action) {
      state.list = state.list.filter((el) => el.id !== action.payload.id);
    },

    completeNote(state, action) {
      state.list.forEach((el) => {
        if (el.id === action.payload.id) {
          el.complete = !el.complete;
        }
      });
    },

    startEdit(state, action) {
      state.editMarkIndex = action.payload.id;
      state.editText = action.payload.text;
    },

    saveEdit(state, action) {
      state.list[action.payload.index].text = state.editText;
      state.editMarkIndex = null;
      state.editText = "";
    },

    updateEditText(state, action) {
      state.editText = action.payload.text;
    },

    toggleMark(state, action) {
      state.chekBoxArr[action.payload.id] =
        !state.chekBoxArr[action.payload.id];
    },

    updateSearch(state, action) {
      state.searchValue = action.payload.text;
    },

    search(state, action) {
      console.log(state.list);
      console.log(state.filteredList);
      state.filteredList = state.list.filter((el) => {
        return action.payload.searchValue == ""
          ? true
          : el.text
              .toLowerCase()
              .includes(action.payload.searchValue.toLowerCase());
      });
    },

    optionFilter(state) {
      console.log(state.filteredList);
      state.filteredList = state.list.filter((el) => {
        if (state.selectedOption === "Complete") return el.complete;
        if (state.selectedOption === "Incomplete") return !el.complete;
        return true;
      });
    },
  },
});

export const {
  toggleTheme,
  addNote,
  deleteNote,
  completeNote,
  startEdit,
  saveEdit,
  updateEditText,
  toggleMark,
  search,
  updateSearch,
  optionFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
