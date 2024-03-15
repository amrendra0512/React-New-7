import React from "react";
import "./ProductData.css";

const ProductData = (props) => {
    // console.log(props);
  const { image, title, updatecart, showCart , deletecart, isSameItem, index , isShowcart, updateTocart, isClickedElemsSame,} = props;

  return (
    <>
      <div className="grid-container">
        <div>
          <div className="grid-item">
            <img src={image} alt="amre.jpg" />
          </div>
          <div className="add-cart">
            {showCart > 0 && isShowcart ? (
              <div>
                <h4>
                  <button onClick={() => updatecart(index)}> + </button>
                </h4>
                {showCart}
                <h4>
                  <button onClick={() => deletecart()}> - </button>
                </h4>
              </div>
            ) : (
              <h4>
                <button onClick={() => updatecart(index)}>Add to cart</button>
              </h4>
            )}
          </div>
          <h4>{title}</h4>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProductData;
