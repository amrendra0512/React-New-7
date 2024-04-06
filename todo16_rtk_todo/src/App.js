import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos, updateTodos } from "./redux/reducers";

const App = () => {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [showUpdate, setShowUpdate] = useState(false);
  const [text, setText] = useState("");
  const [updatedId, setUpdatedId] = useState(null);
  const [strikethroughIndex, setStrikethroughIndex] = useState(null);
  const addHandler = (t) => {
    dispatch(addTodos(t));
    setText("");
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodos(id));
  };

  const editHandler = (val, id) => {
    setText(val);
    setUpdatedId(id);
    setShowUpdate(true);
  };

  const addUpdate = () => {
    dispatch(updateTodos({ text, updatedId }));
    setText("");
    setShowUpdate(false);
  };

  const cancelUpdate = () => {
    setText("");
    setShowUpdate(false);
  };

  const showStribe = (val, ind) => {
    setStrikethroughIndex(ind === strikethroughIndex ? null : ind);
  };

  return (
    <div>
      <div  >
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="enter a task"
          className="h-10 border border-blue-500 ml-4"
        />{" "}
        {showUpdate ? (
          <span>
            {" "}
            <button onClick={() => addUpdate()}>update</button>{" "}
            <button onClick={() => cancelUpdate()}>cancel</button>{" "}
          </span>
        ) : (
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={() => addHandler(text)}>➕</button>
        )}
        {data &&
          data.map((val, ind) => (
            <ul key={ind} className="ml-4">
              <li>
               <strike> {val} </strike>
                <button onClick={() => deleteHandler(ind)}>❎</button>{" "}
                <button onClick={() => editHandler(val, ind)}>✏️</button>{" "}
                <button
                  onClick={() => showStribe(val, ind)}
                  style={{
                    textDecoration:
                      ind === strikethroughIndex ? "line-through" : "none",
                  }}
                >
                  done
                </button>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default App;
