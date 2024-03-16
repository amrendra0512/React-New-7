import logo from "./logo.svg";
import "./App.css";
import {Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import App from "./App";
import NotFound from "./components/NotFound";
import MainComponents from "./components/MainComponents";
import Routing from "./components/Routing";

function App() {
  return (
    <>
  <MainComponents/>
    <Routing/>
    </>
  );
}

export default App;
