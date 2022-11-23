import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name:"",
    age:0,
    role: 0
  });

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ //보내는부분 백이 body에 뭐가 오면 처리하게되어있음
        name: formData.name,
        age: formData.age,
        role: formData.role,
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

  const roleChangeHandler =(event) =>{
    setFormData({
        ...formData,
        role: event.target.value
    }) 
  }
  return (
    <div>
      <form onSubmit={signupSubmitHandler}>
        <input type="text" onChange={nameChangeHandler} />
        <input type="number" onChange={ageChangeHandler} />
        <input type="number" onChange={roleChangeHandler} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Signup;
