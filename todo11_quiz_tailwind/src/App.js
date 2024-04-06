import axios from "axios";
import React, { useEffect, useState } from "react";
import Quiz from "./components/Quiz";

const App = () => {
  const [data, setData] = useState([]);
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [forChecked, setForChecked] = useState([]);

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const response = await axios.get("http://localhost:3000/results");
        if (response.status) {
          setData(response.data);
        }
      };
      fetchApi();
    } catch (err) {
      console.log("error in fetchApi", err);
    }
  }, []);
  const onPrevHandler = () => {
    if (currentQues > 0) {
      setCurrentQues(currentQues - 1);
    }
  };
  const onNextHandler = () => {
    setCurrentQues(currentQues + 1);
  };

  const onAnsChangeHandler = (val) => {
    const updatedOptions = [...forChecked];
    updatedOptions[currentQues] = val;
    setForChecked(updatedOptions);
    if (val === data[currentQues]?.correctAnswer) {
      setScore(score + 1);
    }
  };
  return (
    <div className=" bg-black text-white ">
      {data && (
        <Quiz
          correctAns={data[currentQues]?.correctAnswer}
          options={data[currentQues]?.options}
          question={data[currentQues]?.question}
          onPrevHandler={onPrevHandler}
          onNextHandler={onNextHandler}
          currentQues={currentQues}
          onAnsChangeHandler={onAnsChangeHandler}
          forChecked={forChecked}
          score={score}
        />
      )}
    </div>
  );
};

export default App;
