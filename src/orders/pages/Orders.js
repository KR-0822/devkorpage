import OrderForm from "../components/OrderForm";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../Auth/Auth-context";
import { NavLink } from "react-router-dom";




const Order = () =>{
    const authCtx = useContext(AuthContext);
    const isAdmin = authCtx.isAdmin;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://35.78.92.72:3000/orders", {
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
         {/* 어드민말고 islogin으로 해야할듯? */}
         
        {isAdmin && (
          <div>
            <OrderForm  />
            
          </div>
        )}
      </div>
    );
}

export default Order;