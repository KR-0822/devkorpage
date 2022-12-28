import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DUMMY_Products from "../components/DUMMY_PRODUCT";

import Detail from "../components/Detail";
import AuthContext from "../../Auth/Auth-context";
import ProductUpdateForm from "../components/ProductUpdateForm";
const ProductDetail = () => {
  const navigate = useNavigate  ();
  const authCtx = useContext(AuthContext);
  const isAdmin = authCtx.isAdmin;
  const isLoggedIn =authCtx.isLoggedIn;
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
    fetch(`http://35.78.92.72:3000/products/${productId}`, {
      method: "DELETE",
      headers: { "Access-Control-Allow-Origin": "http://localhost" },
      credentials: "include",
    })
    navigate('/products')
  }
  const productUpdateHandler = () => {
    setUpdate(true);
  }





  return (
    <div>
      <Detail product={product}></Detail>
      <div className="purchase">
        <button>carts</button>
        <button>purchase</button>
      </div>
      <div>
      {isAdmin && !isUpdate &&  (
          <button onClick={productUpdateHandler}>Update</button>
      )}
      {isAdmin && isUpdate && (
        <ProductUpdateForm product={product}></ProductUpdateForm>
      )}
      {isAdmin && (
        <button onClick={productDeleteHandler}>Delete</button>
      )}
      </div>
      {isLoggedIn && (
        <button onClick={productDeleteHandler}>Carts</button>
      )}
    </div>
  );
};

export default ProductDetail;
