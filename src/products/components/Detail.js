import React, { useEffect, useState } from "react";
//지울부분
import bag from "../images/bag.jpeg";
import AuthContext from "../../Auth/Auth-context";
import { useContext } from "react";

import ProductItem from "./ProductItem";
import DUMMY_Products from "../components/DUMMY_PRODUCT";

import "./Detail.css"

 
const Detail = (props) => {
  //없는 상품 처리
  const {id, name, image, price} = props.product
  const authCtx = useContext(AuthContext);
  const isAdmin = authCtx.isAdmin;
  const [products, setProducts] = useState([]);



  return (
    <div className="Bigbox">
      <div className="imagebox">
        {/* 얘도 image로 */}
        
        <img className="image" src={image} alt="" />
        {isAdmin && (
        <button className="editB" >edit</button>
      )}

      </div>
      <div className="sidebox">
      <div className="text2">
        {name}
        </div>
      <div className="text2">
        {id}
        </div>
      <div className="text2">
        ${price}
      </div>
      <div className="size">{/* selectbar */}</div>
      <div className="purchase">
        {/* {price} */}
        ${price}

      </div>  
      
      </div>
    </div>
  );
};
export default Detail;