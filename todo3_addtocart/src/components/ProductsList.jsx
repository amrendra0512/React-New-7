import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsData from "./ProductsData";
const ProductsList = ({
  addtoCarthandler,
  countItem,
  cartItems,
  removeCartItems,
}) => {
  const [productdata, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        if (data) {
          setProductList(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ProductsData
        productdata={productdata}
        addtoCarthandler={addtoCarthandler}
        countItem={countItem}
        cartItems={cartItems}
        removeCartItems={removeCartItems}
      />
    </div>
  );
};

export default ProductsList;
