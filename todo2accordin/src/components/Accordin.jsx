import React from "react";
import './Accordin.css';

const Accordin = (props) => {
  const { title, data, index, onClickhandler, isOpen } = props;
  return (
    <div>        
    <div>
      <div className="main-title">
        <h3>
          <button onClick={() => onClickhandler(index)}>{title} <span>{isOpen ? '-' : '+'}</span></button>
        </h3>
      </div>
      <div>{isOpen && <p>{data}</p>}</div>
    </div>
    </div>
  );
};

export default Accordin;
