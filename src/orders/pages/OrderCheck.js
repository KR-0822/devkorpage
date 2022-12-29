import OrderForm from "../components/OrderForm";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../Auth/Auth-context";
import OrderList from "../components/OrderList";




const OrderCheck = () =>{
    const authCtx = useContext(AuthContext);
    const isAdmin = authCtx.isAdmin;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/orders", {
          headers: { "Access-Control-Allow-Origin": "http://localhost" },
          credentials: "include",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            
            setOrders(data);
            //console.log(orders)
          });
      }, []);

    return (
        <div>
         {/* 어드민말고 islogin으로 해야할듯? */}
        {isAdmin && (
          <OrderList items={orders}></OrderList>
        )}
      </div>
    );
}

export default OrderCheck;