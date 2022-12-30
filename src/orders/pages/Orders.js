import OrderForm from "../components/OrderForm";
import { useContext } from "react";
import AuthContext from "../../Auth/Auth-context";
import { NavLink } from "react-router-dom";

const Order = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div>
      {/* 어드민말고 islogin으로 해야할듯? */}
      {isLoggedIn && (
        <div>
          <OrderForm />
        </div>
      )}
      {!isLoggedIn && (
        <div className="Container">
        <NavLink to="auth/login" end>
        
          <button className="Button">Login 하러 가기</button>
        </NavLink>
        </div>
      )}
    </div>
  );
};

export default Order;
