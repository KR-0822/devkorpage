import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    userID : '',
    password : ''
  });

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:3000/auth/login", {
      
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost'
      },
      credentials: 'include',
      body: JSON.stringify({ //보내는부분 백이 body에 뭐가 오면 처리하게되어있음
        userID: formData.userID,
        password: formData.password
      }),
    });
    console.log()
  };
  const idChangeHandler =(event) =>{
    setFormData({
        ...formData,
        userID: event.target.value,
        
    }) 
  }

  const passwordChangeHandler =(event) =>{
    setFormData({
        ...formData,
        password: event.target.value,
    }) 
  }
  return (
    <div class="Container">
      <input class="Input" type="text" onChange={idChangeHandler}></input>
      <input class="Input" type="password" onChange={passwordChangeHandler}></input>
      <button class="Button" onClick={loginSubmitHandler}>login</button >
      <Link to={"/Signup"}>
        <button class="Button2"> Sign Up </button>
      </Link>
    </div>
  );
};

export default Login;
