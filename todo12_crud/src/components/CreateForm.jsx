import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigate = useNavigate();
  const data = {
    Title: "",
    Year: "",
  };
  const [enterData, setEnterData] = useState(data);
  const [showMsg, setShowMsg]= useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEnterData({ ...enterData, [name]: value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const updateData = await axios.post(`http://localhost:3000/movies/`, enterData);
      if(updateData.status === 201){
        setShowMsg(true)
      }
    } catch (err) {
      console.log("error in update", err);
    }
  };
  const goToHomePageHandler = () => {
    navigate("/");
  };
  return (
    <>
      <button className="right-green-button" onClick={goToHomePageHandler}>Go To Home</button>
      <div className="create-form">
      <h3>Please fill the Form</h3>
      <div >
        <form onSubmit={formSubmitHandler}>
          <label> Title</label> {' '}
          <input
            type="text"
            placeholder="enter title"
            name="Title"
            onChange={onChangeHandler}
            value={enterData.Title}
            required
          />
          <br />
          <br />
          <label> Year</label> {' '}
          <input
            type="number"
            placeholder="enter year"
            name="Year"
            onChange={onChangeHandler}
            value={enterData.Year}
            min={1980}
            max={new Date().getFullYear()}
            required
          />
          <br />
          <br />
          <button className="submit-btn" type="submit">Submit</button>
        </form>
        {showMsg && <span style={{color:"green"}}>Data Created SuccessFully</span>}
      </div>
      </div>
    
    </>
  );
};

export default CreateForm;
