import React, { useState } from "react";
import './Accordin.css';
import Accordin from "./Accordin";
import { accordinData } from "./constant";

const AccordinList = () => {
  const [open, setopen] = useState(null);
  const update = (index) => {
    setopen(index)
  };

  return (
    <div className="main-items">
        <div>
        <h1> Flipkart Faq</h1> </div>
      {accordinData.map((val, ind) => (
        <Accordin
          title={val.title}
          data={val.content}
          index={ind}
          onClickhandler={update}
          isOpen={open === ind}
          key={ind}
        />
      ))}
    </div>
  );
};

export default AccordinList;
