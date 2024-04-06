import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Movies = () => {
  const [moviedata, setMoviedata] = useState({});
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=4827adaa`
      );
      console.log("response", response);
      if (response.data) {
        setMoviedata(response.data);
      }
    };
    fetchApi();
  }, []);

  const onclickHandler = () => {
    window.location.href = `https://www.imdb.com/title/${id}`;
  };

  console.log("moviedata", moviedata);
  return (
    <div className="bg-black text-white d-flex">
      <img src={moviedata.Poster} alt={moviedata.Title} />
     <div style={{marginLeft:'100px'}}>
     <h2>{moviedata.Title}</h2>
      <h4>{moviedata.Year}</h4>
      <button onClick={() => onclickHandler()}>See Imdb Link</button>
     </div>

    
    </div>
  );
};

export default Movies;
