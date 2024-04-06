import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MoviesList = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        "https://api.sampleapis.com/movies/animation"
      );
      if (response.data) {
        setMoviesData(response.data);
      }
    };
    fetchApi();
  }, []);
  console.log("moviesData", moviesData);
const navigate = useNavigate();
  const handleSeeMoreClick = (id)=> {
    navigate(`/movie/${id}`)
  }
  return (
    <div className="movies row">
      {moviesData.map((val, ind) => (
        <div key={ind} className="movies card col-3">
          <img className="card-img card-img-top" src={val.posterURL} alt={val.Title} />
          <h2>{val.title}</h2>
          <button className="card-footer" onClick={()=>handleSeeMoreClick(val.imdbId)}>See More</button>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
