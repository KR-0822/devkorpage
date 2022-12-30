import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Auth-context";
import "./Login.css";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [formData, setFormData] = useState({
    userID: "",
    password: "",
  });

  const  loginSubmitHandler = async (event) => {
    event.preventDefault();

    await fetch("http://35.78.92.72:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://35.78.92.72",
        
      },
      
      credentials: "include",
      body: JSON.stringify({
        //보내는부분 백이 body에 뭐가 오면 처리하게되어있음
        userID: formData.userID,
        password: formData.password,
      }),
    }).then((response) => {
      const rs = response.json();
      return rs;
    });
    await fetch("http://localhost:3000/profile", {
      headers: { 
        "Access-Control-Allow-Origin": "http://localhost" 
      },
      credentials: "include",
    })
      .then((response) => {
        const rs = response.json();
        console.log(rs);
        return rs;
      })
      .then((data) => {
        authCtx.login(data.role)
        authCtx.roleCheck(data.role)
        authCtx.userIDCheck(data.id)
      });
  };

  const idChangeHandler = (event) => {
    setFormData({
      ...formData,
      userID: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };
  return (
    <div className="Container">
      <div className="SmallC">
      <input className="Input" placeholder="ID" type="text" onChange={idChangeHandler}></input>
      <input
        className="Input"
        type="password"
        placeholder="Password"
        onChange={passwordChangeHandler}
      ></input>
      <button className="Button" onClick={loginSubmitHandler}>
        login
      </button>
      <Link to={"/auth/register"}>
        <button className="Button2"> Sign Up </button>
      </Link>
      </div>
    </div>
  );
};

export default Login;
