import React, { useEffect } from "react";
import fetchApi from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { error, loading, product } = useSelector((state) => state.products);
  console.log( loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);
  return (
    <>
    <div>
   {loading ? <h3>Loading started .....</h3> : <h3>Loading closed .....</h3>}
   {error ? <h3>Error: {error}</h3> : <h3> No Error.... {error}</h3>}
    </div>
    <div>
      {product &&
        product.map((val, ind) => (
          <ul key={ind}>
            <li>
              Name: {val.name} <br />
              username: {val.username} <br />
              email: {val.email}
            </li>
          </ul>
        ))}
    </div>
    
    </>
    
  );
};

export default App;
