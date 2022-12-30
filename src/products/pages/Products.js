import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../Auth/Auth-context";
import { NavLink } from "react-router-dom";
import DUMMY_Products from "../components/DUMMY_PRODUCT";
import "./Products.css"

const Products = () => {
  const authCtx = useContext(AuthContext);
  const isAdmin = authCtx.isAdmin;
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch("http://localhost:3000/products", {
      headers: { "Access-Control-Allow-Origin": "http://localhost" },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data)
        setProducts(data);
        setLoading(false)
      });
  }, []);

  return (
    <div className="productlistbox">
      {!isLoading &&  <ProductList items={products} />}
      {isAdmin && !isLoading && (
        <div className="absolute">
          <NavLink to="/products/add" style={{ textDecoration: 'none' }}  end>
            <button  className="Add">ADD</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Products;
