import DarkIcon from "../assets/DarkIcon";
import LightIcon from "../assets/LightIcon";
import SearchIcon from "../assets/SearchIcon";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, search, updateSearch, optionFilter } from "../redux/reducers/toDoReducer";

export default function Header({ seletedOption, setOption }) {
  const theme = useSelector((state) => state.todos.theme);
  const selectedOption =useSelector((state) => state.todos.selectedOption)
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.todos.searchValue);

  function handleChange(event) {

    setOption(event.target.value);
  }
  
  return (
    <header>
      <h1 className="header-tittle">TODO LIST</h1>
      <div className="header-row">
        <div className="header-input">
          <input
            type="text"
            placeholder="Search note..."
            value={searchValue}
            onChange={(event) => dispatch(updateSearch({ text: event.target.value }))}
          />
          <div className="header-search" onClick={() => dispatch(search({searchValue: searchValue}))}>
            <SearchIcon />
          </div>
        </div>
        <select
          value={selectedOption}
          name=""
          id=""
          className="header-select"
          onChange={handleChange}
        >
          <option value="">ALL</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>

        <button className="header-btn" onClick={() => dispatch(toggleTheme())}>
          {theme == "white" ? <DarkIcon /> : <LightIcon />}
        </button>
      </div>
    </header>
  );
}
