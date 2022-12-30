import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Auth-context";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const logoutSubmitHandler = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost",
      },
      credentials: "include",
    }).then(authCtx.logout(), navigate("/"));
  };

  return (
    <div className="Container">
      <button className="Button" onClick={logoutSubmitHandler}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
