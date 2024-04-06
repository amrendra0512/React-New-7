import React, { useState } from "react";

const Quiz = ({
  options,
  question,
  onPrevHandler,
  onNextHandler,
  currentQues,
  onAnsChangeHandler,
  score,
  forChecked,
}) => {
  return (
    <div>
       <div className=" absolute right-10"><h4 className=" bg-blue-900 text-xl font-bold py-2 px-4 rounded">Score {score}</h4></div>
      <div className=" pt-5 text-center justify-between">
      <div className=" bg-black text-white">{question}</div>
      <form>
        {options &&
          options.map((val, ind) => (
            <label key={ind}>
              <input
                type="radio"
                value={val}
                checked={forChecked[currentQues] === val}
                onChange={() => onAnsChangeHandler(val)}
              />
              {val}
            </label>
          ))}
      </form>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={onPrevHandler}>Prev</button>{" "}
      <button  className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={onNextHandler}>Next</button>
      </div>
    </div>
  );
};

export default Quiz;
