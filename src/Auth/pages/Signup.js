import { useState } from "react";

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
      <form onSubmit={signupSubmitHandler}>
        <input type="text" onChange={nameChangeHandler} />
        <input type="number" onChange={ageChangeHandler} />
        <input type="text" onChange={userIDChangeHandler} />
        <input type="password" name="" id="" onChange={passwordChangeHandler}/>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Signup;
