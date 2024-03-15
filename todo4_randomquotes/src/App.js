import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import QuoteList from "./components/QuoteList";

function App() {
  const [quates, setQuates] = useState("");
  const [auther, setAuther] = useState("");
  const [btnClick, setBtnClick] = useState(0);
  const [saveQuates, setSaveQuates] = useState([]);
  const [isSavedDataAvails, setIsSavedDataAvails]= useState(false)

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((res) => {
      setQuates(res.data.content);
      setAuther(res.data.author);
    });
  }, [btnClick]);

  const saveHandler = (quatesdata, auther) => {
    const updatedObject = { author: auther, content: quatesdata };
    setSaveQuates([...saveQuates, updatedObject]);
  };

  const showSavedContents = (savedData) => {
    if(savedData.length){
      setIsSavedDataAvails(true)
    }
  };

  const deleteHandler = (index)=> {
    console.log("deleteHandler",index);
    saveQuates.splice(index,1)
    setSaveQuates([...saveQuates])

  }

  // console.log("saveQuates", saveQuates);
  return (
    <>
    <div className="quatesgen">
      <blockquote>{quates}</blockquote>
      <cite>{auther}</cite> <br></br>
      <br></br>
      <button
        style={{ backgroundColor: "yellow" }}
        onClick={() => setBtnClick(btnClick + 1)}
      >
        Change quates
      </button>{" "}
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => saveHandler(quates, auther)}
      >
        Save
      </button>
      <div>
          <button onClick={() => showSavedContents(saveQuates)}>
            show Saved Quotes
          </button>
        </div>
    </div>
    {
      isSavedDataAvails && saveQuates.map((val,ind)=>(
        <div key={ind}>
        <blockquote>{val.content}</blockquote>
        <cite>{val.author}</cite> <br></br>
        <button onClick={()=>deleteHandler(ind)}>Delete</button>
        <br></br>
        </div>
      ))
    }
       
        </>
  );
}

export default App;
