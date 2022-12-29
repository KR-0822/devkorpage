import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DUMMY_Products from "../components/DUMMY_PRODUCT";

import Detail from "../components/Detail";
import AuthContext from "../../Auth/Auth-context";
import ProductUpdateForm from "../components/ProductUpdateForm";
const ProductDetail = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const {isAdmin, isLoggedIn, userID} = authCtx

  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [isUpdate, setUpdate] = useState(false);
  useEffect(() => {
    fetch(`http://35.78.92.72:3000/products/${productId}`, {
      headers: { "Access-Control-Allow-Origin": "http://localhost" },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const productDeleteHandler = () => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: "DELETE",
      headers: { "Access-Control-Allow-Origin": "http://localhost" },
      credentials: "include",
    });
    navigate("/products");
  };
  const productUpdateHandler = () => {
    setUpdate(true);
  };
  const cartsHandler = () => {
    fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost",
      },
      credentials: "include",
      body: JSON.stringify({
        //보내는부분 백이 body에 뭐가 오면 처리하게되어있음
        id: userID,
        productID: product.id
      }),
    });
    console.log(userID);
  };


  return (
    <div>
      <Detail product={product}></Detail>
      <div>
        {isAdmin && !isUpdate && (
          <button onClick={productUpdateHandler}>Update</button>
        )}
        {isAdmin && isUpdate && (
          <ProductUpdateForm product={product}></ProductUpdateForm>
        )}
        {isAdmin && <button onClick={productDeleteHandler}>Delete</button>}
      </div>
      {isLoggedIn && (
        <div>
          <button onClick={cartsHandler}>Carts</button>
          <button>purchase</button>
        </div>

      )}
    </div>
  );
};

export default ProductDetail;
