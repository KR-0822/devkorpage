import React, { useEffect } from "react";

import ProductItem from "./ProductItem";
import DUMMY_Products from "../components/DUMMY_PRODUCT";

import "./Detail.css"
const Detail = (props) => {
  //없는 상품 처리
  const {id, name, image, price} = props.product
  return (
    <div>
      <div>
        {/* 얘도 image로 */}
        <img src={DUMMY_Products.image} alt="" />
      </div>
      <div className="text">
        {name}
        {id}
        {price}
      </div>
      <div className="size">{/* selectbar */}</div>
      <div className="purchase">
        {price}
        <button>wishlist</button>
        <button>purchase</button>
        <button>edit</button>
      </div>
      <div></div>
    </div>
  );
};
export default Detail;
