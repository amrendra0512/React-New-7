import React from "react";

const ChildComp = (props) => {
  const { inputData, onChangeHandler, add, inputValue, deleteHandler } = props;
  return (
    <div>
      <h4>I am child</h4>
      {/* <div>
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          value={inputData}
        />
        <button onClick={() => add()} className="add-button">
          Add
        </button>
      </div> */}
      <div>
        {inputValue.length > 0 &&
          inputValue.map((val, ind) => (
            <ul key={ind}>
              <li>
                {val}{" "}
                <button
                  className="del-button"
                  onClick={() => deleteHandler(ind)}
                >
                  Delete
                </button>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default ChildComp;
