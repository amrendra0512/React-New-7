import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

const Routing = () => {
  return (
      <div>
         <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default Routing
