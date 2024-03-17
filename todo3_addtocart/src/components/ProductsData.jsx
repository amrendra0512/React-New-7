import React, { useState } from "react";
import MainProducts from "./MainProducts";
import "./ProductData.css";

const ProductsData = ({
  productdata,
  addtoCarthandler,
  countItem,
  cartItems,
  removeCartItems,
}) => {
  return (
    <div className="image-grid">
      {productdata.map((val, ind) => (
        <div className="images-border" key={ind}>
          <div>
            <img className="image-item" src={val.image} />
          </div>
          <MainProducts
            price={val.price}
            title={val.title}
            productid={val.id}
            addtoCarthandler={addtoCarthandler}
            countItem={countItem}
            cartItems={cartItems}
            removeCartItems={removeCartItems}
            index={ind}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsData;
