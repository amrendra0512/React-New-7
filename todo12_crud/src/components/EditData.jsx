import axios from "axios";
import React, { useEffect, useState } from "react";

const EditData = ({ editSubmitHandler, editedId, isShowEditMsg }) => {
  const [editData, setEditData] = useState();

  const [isOpenEditData, setIsOpenEditData] = useState(false);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };
  const editHandler = async () => {
    setIsOpenEditData((ab)=>!ab);
    try {
      const editResp = await axios.get(`http://localhost:3000/movies/${editedId}`);
      console.log("editResp", editResp);
      if (editResp.status === 200) {
        setEditData(editResp.data);
      }
    } catch (err) {
      console.log("error in editHandler", err);
    }
  };
  return (
    <>
      <div>
        <button onClick={() => editHandler()}>✏️</button>
      </div>
      {isOpenEditData && (
        <div>
          <form onSubmit={(e)=>{
            editSubmitHandler(editedId,e ,editData);
            setIsOpenEditData(false)
            }}>
            <label> Title</label> {' '}
            <input
              type="text"
              name="Title"
              onChange={onChangeHandler}
              value={editData?.Title}
              required
            />
            <br />
            <br />
            <label> Year</label> {' '}
            <input
              type="number"
              name="Year"
              onChange={onChangeHandler}
              value={editData?.Year}
              min={1980}
              max={new Date().getFullYear()}
              required
            />
            <br />
            <br />
            <button className="submit-btn" type="submit">Submit</button>
          </form>
          {isShowEditMsg && <span style={{color:"green"}}>Data updated SuccessFully</span>}
        </div>
      )}
    </>
  );
};

export default EditData;
