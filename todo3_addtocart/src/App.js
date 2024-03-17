import "./App.css";
import { useState } from "react";
import ProductsList from "./components/ProductsList";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [countItem, setCountItems] = useState(0);

  const addToCart = (title, price, productid) => {
    setCountItems(countItem + 1);
    setCartItems((prevItems) => [...prevItems, { title, price, productid }]);
  };

  const removeCartItems = (title, price, productid) => {
    setCountItems(countItem - 1);
    //setCartItems((prevItems) => [...prevItems, { title, price, productid }]);
  };

  console.log("cartItems", cartItems);

  return (
    <>
      <div className="count-cart-items">
        <h3>
          <span className="for-cart-span">CartItems {countItem}</span>
        </h3>
      </div>

      {/* {cartItems.map((val, ind) => (
        <AddToCartHeader
          title={val.title}
          price={val.price}
          productid={val.productid}
          key={ind}
        />
      ))} */}
      <div>
        <ProductsList
          addtoCarthandler={addToCart}
          countItem={countItem}
          cartItems={cartItems}
          removeCartItems={removeCartItems}
        />
      </div>
    </>
  );
}

export default App;
