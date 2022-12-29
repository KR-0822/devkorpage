import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../Auth/Auth-context";
import { NavLink } from "react-router-dom";
import DUMMY_Products from "../components/DUMMY_PRODUCT";

const Products = () => {
  const authCtx = useContext(AuthContext);
  const isAdmin = authCtx.isAdmin;
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://35.78.92.72:3000/products", {
      headers: { "Access-Control-Allow-Origin": "http://localhost" },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data)
        setProducts(data);
        
      });
  }, []);

  return (
    <div>
      <ProductList items={products} />
      {isAdmin && (
        <div>
          <NavLink to="/products/add" end>
            <button class="Add">ADD</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Products;
