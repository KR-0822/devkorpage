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
  const {description, name, image, price} = props.product
  const authCtx = useContext(AuthContext);
  const isAdmin = authCtx.isAdmin;
  const [products, setProducts] = useState([]);



  return (
    <div className="Bigbox">
      <div className="imagebox">
        {/* 얘도 image로 */}
        
        <img className="image" src="https://blog.kakaocdn.net/dn/d8uTod/btqJ4HaMMf6/DSVHYb5hP5Bs7bJkQZJplk/img.jpg" alt="" />
        {isAdmin && (
        <button className="editB" >edit</button>
      )}

      </div>
      <div className="sidebox">
      <div className="text2">
       
       <p className="text2_name">
        {name}
        </p>
        </div>
       <p className="text2_id">
        {description}
        </p>
        <p className="text2_price">
        ${price}
        </p>
      <div className="size">{/* selectbar */}</div> 
      
      </div>
    </div>
  );
};
export default Detail;