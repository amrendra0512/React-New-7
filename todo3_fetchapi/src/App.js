import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";

function App() {
  const [movieListData, setMovieListdata] = useState([]);
  const [searchedText,setSearchedText]= useState('')

useEffect(()=> {

  async function fetchMovieList() {
   const res = await fetch (`https://www.omdbapi.com/?s=${searchedText}&apikey=aa25ab78`);
   const data = await res.json();
    console.log(data.Search);
    setMovieListdata(data.Search)
  }
  fetchMovieList()
},[searchedText])

  return (
    <>
    <input type="text" value={searchedText} onChange={(e)=> setSearchedText(e.target.value)}/> 
    <button onClick={()=>setSearchedText('')}>Clear</button>
      <MovieList movieListData={movieListData}
       />
    </>
  );
}

export default App;
