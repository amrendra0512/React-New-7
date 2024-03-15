import React, { useState } from "react";
import './ColorPicker.css'

const ColorPicker = () => {
  const [backGroundColor, setBackGroundColor] = useState("#000000");

  const chnageBackgroundColor = (event) => {
    setBackGroundColor(event);
  };
  return (
    <>
      <div>
        <input
          type="color"
          onChange={(e) => chnageBackgroundColor(e.target.value)}
        />
      </div>
      <div className="changer" style={{ backgroundColor: backGroundColor }}/>
    </>
  );
};

export default ColorPicker;
