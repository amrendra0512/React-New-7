import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import ParentChild from "./pages/ParentChild";
import Accordin from "./pages/Accordin";
import UseContext from "./pages/UseContext";
import SimpleForms from "./pages/SimpleForms";
import BasicRouting from "./pages/BasicRouting";
import AddToCart from "./pages/AddToCart";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/counter" element={<Counter/>}> </Route>
        <Route path="/todo" element={<Todo/>}> </Route>
        <Route path="/parentchild" element={<ParentChild/>}> </Route>
        <Route path="/accordin" element={<Accordin/>}> </Route> 
        <Route path="/usecontext" element={<UseContext/>}> </Route> 
        <Route path="/simpleforms" element={<SimpleForms/>}> </Route> 
        <Route path="/basicrouting" element={<BasicRouting/>}> </Route>
        <Route path="/addtocart" element={<AddToCart/>}> </Route>
        <Route path="*" element={<NotFound/>}> </Route>
      </Routes>
    </>
  );
};

export default Routing;
