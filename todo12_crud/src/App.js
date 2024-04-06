import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./components/Movies";
import "./App.css";
import DeleteMovies from "./components/DeleteMovies";

import { useNavigate } from "react-router-dom";
import EditData from "./components/EditData";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [isShowEditMsg, setIsShowEditMsg] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/movies");
        setMovieData(resp.data);
      } catch (err) {
        console.log("error in fetchApi", err);
      }
    };
    fetchApi();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const remainData = await axios.delete(
        `http://localhost:3000/movies/${id}`
      );
      if (remainData.status === 200) {
        const updatedMovies = movieData.filter((m) => m.id !== id);
        setMovieData(updatedMovies);
      }
    } catch (err) {
      console.log("error in deleteHandler", err);
    }
  };

  const editSubmitHandler = async (id, e, data) => {
    e.preventDefault();
    try {
      const editData = await axios.put(
        `http://localhost:3000/movies/${id}`,
        data
      );
      const updatedArray = movieData.map((item) => {
        if (item.id === editData.data.id) {
          return editData.data;
        }
        return item;
      });
      if (editData.status === 200) {
        setMovieData(updatedArray);
        setIsShowEditMsg(true);
      }
    } catch (err) {
      console.log("error in editSubmitHandler", err);
    }
  };
  const addNewClick = () => {
    navigate("/createform");
  };

  return (
    <div >
      <button className="right-green-button" onClick={addNewClick}>
        Add New
      </button>
      <div className="content" >
        {movieData &&
          movieData.map((val, ind) => (
            <div key={ind} className="bordered-content">
              <Movies title={val.Title} year={val.Year} />
              <EditData
                editedId={val.id}
                editSubmitHandler={editSubmitHandler}
                isShowEditMsg={isShowEditMsg}
              />
              <DeleteMovies deleteId={val.id} deleteHandler={deleteHandler} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
