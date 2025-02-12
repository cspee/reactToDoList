import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/toDoReducer";

export default configureStore({
  reducer: {
    todos: todoReducer,
    
  },
});
