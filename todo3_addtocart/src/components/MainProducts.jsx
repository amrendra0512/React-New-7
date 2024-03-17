import React, { useState } from "react";

const MainProducts = ({
  price,
  title,
  productid,
  addtoCarthandler,
  countItem,
  cartItems,
  removeCartItems,
  index,
}) => {
  console.log("countItem", cartItems);

  const [itemsCount, setItemsCount] = useState(0);

  return (
    <div>
      <h4>{title}</h4>
      <h3>Price {price}</h3>
      <div className="container-button">
        {countItem > 0  ? (
          <div>
            <button onClick={() => addtoCarthandler(title, price, productid)}>
              +
            </button>{" "}
            <button onClick={() => removeCartItems()}>-</button>
          </div>
        ) : (
          <h4>
            <button
              className="add-cart"
              onClick={() => addtoCarthandler(title, price, productid)}
            >
              add to cart
            </button>
          </h4>
        )}
      </div>
    </div>
  );
};

export default MainProducts;
