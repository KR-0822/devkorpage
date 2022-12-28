import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DUMMY_Products from "../components/DUMMY_PRODUCT";

import Detail from "../components/Detail";
import AuthContext from "../../Auth/Auth-context";
const ProductDetail = () => {
  const authCtx = useContext(AuthContext);
  const isAdmin = authCtx.isAdmin;
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`, {
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

  const thisProduct = DUMMY_Products.find(prod => prod.id === productId);
  return (
    <div>
      <Detail product={product}></Detail>
      <div className="purchase">
        <button>carts</button>
        <button>purchase</button>
      </div>
      {isAdmin && (
        <NavLink to="/products/add" end>
          <button class="Add">ADD</button>
        </NavLink>
      )}
    </div>
  );
};

export default ProductDetail;
