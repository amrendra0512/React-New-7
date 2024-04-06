import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const [onchangeData, setOnchangeData] = useState("");
  const onChangehandler = (e) => {
    setOnchangeData(e.target.value);
  };
  const onAddhandler = () => {
    dispatch(addTodos(onchangeData));
    setOnchangeData("");
  };
  const onDeletehandler = (ind) => {
    dispatch(deleteTodos(ind));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => onChangehandler(e)}
        value={onchangeData}
      />
      <button onClick={() => onAddhandler()}>➕</button>
      
      {data &&
        data.map((val, ind) => (
          <ul key={ind}>
            <li>{val}</li>
            <button onClick={() => onDeletehandler(ind)}>❎</button>
          </ul>
        ))}
    </div>
  );
};

export default App;
