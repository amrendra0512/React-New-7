import React from "react";
import { Link } from "react-router-dom";

const MainComponents = () => {
  return (
    <div className="main-content">
      <button >
        <Link to="/">HOME</Link>
      </button> {' '}
      <button>
        <Link to="/counter">Counter</Link>
      </button> {' '}
      <button>
        <Link to="/todo">Todo</Link>
      </button> {''}
      <button>
        <Link to="/parentchild">Props</Link>
      </button> {' '}
      <button>
        <Link to="/accordin">Accordin</Link>
      </button> {''}
      <button>
        <Link to="/usecontext">UseContext</Link>
      </button> {''}
      <button>
        <Link to="/simpleforms">Registration Forms</Link>
      </button> {''}
      <button>
        <Link to="/basicrouting"> Basic Routing</Link>
      </button> {''}
      <button>
        <Link to="/addtocart"> Add To Cart</Link>   
      </button> {''}
    </div>
  );
};

export default MainComponents;
