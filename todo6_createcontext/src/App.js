import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/Component1";
import { createContext, useState } from "react";

export const MainContext = createContext('light');  // creating the context

function App() {
const data = {
  bgColor: '',
  fncolor: ''
}
  const [mode, setMode] = useState(data);
  
  const handleDarkModeChange = ()=> {
    setMode({bgColor: '#333333', fncolor:'#ffffff'});
  };

  const handleLightModeChange = ()=> {
    setMode({bgColor: '#FFB6C1', fncolor:'#000000'});
  }

  return (
    <MainContext.Provider value={mode}>
    <div className="context-container">
    <h5>App</h5>
    <button onClick={()=>handleDarkModeChange()}>Dark Mode</button> {'  '}
    <button onClick={()=>handleLightModeChange()}>Light Mode</button>
      
      
      <Component1 />
      
    </div>
    </MainContext.Provider>
  );
}

export default App;
