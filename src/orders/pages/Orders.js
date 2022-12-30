import OrderForm from "../components/OrderForm";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../Auth/Auth-context";
import { NavLink } from "react-router-dom";




const Order = () =>{
    const authCtx = useContext(AuthContext);
    const isAdmin = authCtx.isAdmin;
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