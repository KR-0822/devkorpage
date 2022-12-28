import { useState } from "react";
import "./Signup.css";


const Signup = () => {
  const [formData, setFormData] = useState({
    userID : "",
    password : "",
    name:"",
    age:0,
  });

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ //보내는부분 백이 body에 뭐가 오면 처리하게되어있음
        name: formData.name,
        age: formData.age,
       //role: formData.role,
        password :formData.password,
        userID : formData.userID
      }),
    });
  };

  const nameChangeHandler =(event) =>{
    setFormData({
        ...formData,
        name: event.target.value,
        
    }) 
  }

  const ageChangeHandler =(event) =>{
    setFormData({
        ...formData,
        age: event.target.value,
    }) 
  }



  const userIDChangeHandler =(event) =>{
    setFormData({
        ...formData,
        userID: event.target.value
    }) 
  }


  const passwordChangeHandler =(event) =>{
    setFormData({
        ...formData,
        password: event.target.value
    }) 
  }
  return (
    <div>
      <form className="Container" onSubmit={signupSubmitHandler}>
        <input className="Input" placeholder="ID" type="text" onChange={userIDChangeHandler} />
        <input className="Input" placeholder="Password" type="password" name="" id="" onChange={passwordChangeHandler}/>
        <input className="Input" placeholder="Name" type="text" onChange={nameChangeHandler} />
        <input className="Input" placeholder="Age" type="number" min="1" onChange={ageChangeHandler} />

        <button className="Button">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
