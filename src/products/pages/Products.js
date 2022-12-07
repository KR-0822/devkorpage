import ProductList from "../components/ProductList";
import { useEffect } from "react";
import { useState } from "react";

import DUMMY_Products from "../components/DUMMY_PRODUCT";
const Products = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/users", {
          headers: { "Access-Control-Allow-Origin": "http://localhost" },
          credentials: 'include',
    
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setUsers(data);
          });
      }, []);
      return (
        
        <div>
        <ProductList items={DUMMY_Products} />
        </div>
    );
}

export default Products;