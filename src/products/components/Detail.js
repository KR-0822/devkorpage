import React from "react";
//지울부분
//import AuthContext from "../../Auth/Auth-context";
//import { useContext } from "react";
import "./Detail.css";
const Detail = (props) => {
  //없는 상품 처리
  const { description, name, price } = props.product;
  //console.log(props.product.photos[0].url)
  let image = "";
  if (props.product.photos[0]) {
    image = props.product.photos[0].url;
  }
  //const authCtx = useContext(AuthContext);
  return (
    <div className="Bigbox">
      <div className="imagebox">
        <img className="image" src={image} alt="" />
      </div>
      <div className="sidebox">
        <div className="text2">
          <p className="text2_name">{name}</p>
        </div>
        <p className="text2_id">{description}</p>
        <p className="text2_price">${price}</p>
        <div className="size">{/* selectbar */}</div>
      </div>
    </div>
  );
};
export default Detail;
