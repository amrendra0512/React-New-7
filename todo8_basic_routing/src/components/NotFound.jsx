import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound-content">
      <h4>The Path you are found is not available</h4>

      <button style={{ backgroundColor: "red" }}>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
