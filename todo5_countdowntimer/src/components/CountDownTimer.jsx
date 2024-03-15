import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [stopCountDown, setStopCountDown] = useState(false)
  const [showStopResume, setShowStopResume] = useState(false)


  const onStarthandler = (time)=> {
    setSeconds(time * 60)
    setStartTimer(true);


  }

  const stopHandler = ()=> {
    setStopCountDown(true);
    setStartTimer(false)
  }

  const resumeHandler = ()=> {
    setStopCountDown(false);
    setStartTimer(true)
  }
  useEffect(() => {
    if (startTimer) {
      const countDown = setInterval(() => {
        setSeconds((prevSceond) => {
          if (prevSceond === 0) {
            clearInterval(countDown);
            return 0;
          } else {
            return prevSceond - 1;
          }
        });
      }, 1000);
      return () => clearInterval(countDown);
    }
  }, [startTimer]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        { <div> CountDown Starts: 
        {minutes < 10 ? `0${minutes}` : minutes}:
          {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
        </div>}
        <div>
         <div>
         <button onClick={() => onStarthandler(5)}>
           00:05:00
            </button>
             <div>
            {startTimer && !stopCountDown && <button onClick={() => stopHandler()}>Stop</button>}
           {stopCountDown && !startTimer && <button onClick={() => resumeHandler()}>Resume</button>}
            <br></br>
            </div>
          
         </div>
         <div>
         <button onClick={() => onStarthandler(10)}>
           00:10:00
            </button> 
           {startTimer && !stopCountDown && <button onClick={() => stopHandler()}>Stop</button>}
           {stopCountDown && !startTimer && <button onClick={() => resumeHandler()}>Resume</button>}
            <br></br>
         </div>
       <div>
       <button onClick={() => onStarthandler(20)}>
           00:20:00
            </button>
            {startTimer && !stopCountDown && <button onClick={() => stopHandler()}>Stop</button>}
           {stopCountDown && !startTimer && <button onClick={() => resumeHandler()}>Resume</button>}
            <br></br>
       </div>
        </div>
        <div>
          {/* <button onClick={() => setStartTimer(true)}>Start</button>{" "}
          <button onClick={() => setStartTimer(false)}>Stop</button> */}
        </div>
      </div>
    </>
  );
};

export default CountDownTimer;
