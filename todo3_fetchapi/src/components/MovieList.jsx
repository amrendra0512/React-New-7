import React from "react";

const MovieList = ({ movieListData }) => {
  return (
    <>
      {movieListData && movieListData.map((val, ind) => (
        <div key={ind}>
          <img src={val.Poster} />
          {val.Title}
           <a href={val.imdbID}>{val.imdbID}</a>
        </div>
      ))}
    </>
  );
};

export default MovieList;
