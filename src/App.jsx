import { useState } from "react";
import Emptybody from "./components/Emptybody";
import Header from "./components/Header";
import List from "./components/List";
import Modal from "./components/Modal";
import BtnPlus from "./assets/BtnPlus";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./redux/reducers/toDoReducer";

function App() {
  //не работает hidden без important
  const theme = useSelector((state) => state.todos.theme);
  const newList = useSelector((state) => state.todos.list)

  const [open, setOpen] = useState(false);
  const [selectedOption, setOption] = useState("");

  return (
    <div className={theme == "white" ? "body" : "body dark"}>
      <div className="container">
        <Header selectedOption={selectedOption} setOption={setOption} />
        {newList.length == 0 ? (
          <Emptybody />
        ) : (
          <List  selectedOption={selectedOption}  />
        )}

        <Modal open={open}  onClose={() => setOpen(false)} />

        <button className="empty-btnPLus " onClick={() => setOpen(true)}>
          {" "}
          <BtnPlus />
        </button>
      </div>
    </div>
  );
}

export default App;
