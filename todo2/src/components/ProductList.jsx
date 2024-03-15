import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [showCart, setShowCart] = useState(0);
  const [showElem, setShowElem] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((err) => console.log(err));
  });

  const updatecart = (elem) => {
    setShowElem(elem);
    setShowCart(showCart + 1);
  };

  const deletecart = () => {
    setShowCart(showCart - 1);
  };

  return (
    <>
      <div>
        Items: <h1>{showCart}</h1>
      </div>
      <div>
        {productData.map((val, ind) => (
          <ProductData
            quantity={val.quantity || 0}
            image={val.image}
            key={ind}
            title={val.title}
            updatecart={updatecart}
            showCart={showCart}
            deletecart={deletecart}
            index={ind}
            isShowcart={showElem === ind}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
