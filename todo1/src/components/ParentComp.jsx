import React, { useState } from "react";
import "./ParentComp.css";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const [inputValue, setInputValue] = useState([]);

  const [inputData, setInputData] = useState("");

  const onChangeHandler = (event) => {
    setInputData(event.target.value);
  };

  const addHandler = () => {
    if (inputData) {
      setInputValue([...inputValue, inputData]);
    }
    setInputData("");
  };

  const deleteHandler = (ind) => {
    inputValue.splice(ind, 1);
    setInputValue([...inputValue]);
  };
  return (
    <div>
      <div>
        <h4>I am parent</h4>
      </div>
      <div>
      <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          value={inputData}
        />
        <button onClick={() => addHandler()} className="add-button">
          Add
        </button>
      </div>
      <div>
        <ChildComp
          add={addHandler}
          onChangeHandler={onChangeHandler}
          inputData={inputData}
          inputValue={inputValue}
          deleteHandler={deleteHandler}
        />
      </div>
    </div>
  );
};

export default ParentComp;
