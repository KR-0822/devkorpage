import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <input type="text" onChange={idChangeHandler}></input>
      <input type="password" onChange={passwordChangeHandler}></input>
      <button onClick={loginSubmitHandler}>login</button >
      <Link to={"/sign-up"}>
        <button> sign-up</button>
      </Link>
    </div>
  );
};

export default Login;
