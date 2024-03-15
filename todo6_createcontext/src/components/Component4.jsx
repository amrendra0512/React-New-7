import React, { useContext } from 'react'
import { MainContext } from '../App';
const Component4 = () => {

    const value = useContext(MainContext);
console.log("getConext", value.bgColor
);

const bgColour = value.bgColor;
const fontColor = value.fncolor;

  return (
    <div className="context-container4" style={{backgroundColor: bgColour, color:fontColor}}>
      <h4>Component4</h4>
    </div>
  )
}

export default Component4
