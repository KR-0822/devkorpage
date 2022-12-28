import { useState } from "react";
import { useNavigate } from "react-router-dom";


const OrderForm = () => {
  const navigate = useNavigate();
  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  );
  const [formData, setFormData] = useState({
    user_id: "",
    orderer_name: "",
    receiver_name: "",
    address: "",
    zipcode: "",
    phone_no: "",
    total_price: "",
    productsID: [],
    count: [],
  });
  const [disabled, setDisabled] = useState(false);
  
  const user_idChangeHandler = (event) => {
    setFormData({
      ...formData,
      user_id: event.target.value,
    });
  };
  const orderer_nameChangeHandler = (event) => {
    setFormData({
      ...formData,
      orderer_name: event.target.value,
    });
  };
  const receiver_nameChangeHandler = (event) => {
    setFormData({
      ...formData,
      receiver_name: event.target.value,
    });
  };
  const addressChangeHandler = (event) => {
    setFormData({
      ...formData,
      address: event.target.value,
    });
  };
  const zipcodeChangeHandler = (event) => {
    setFormData({
      ...formData,
      zipcode: event.target.value,
    });
  };
  const phone_noChangeHandler = (event) => {
    setFormData({
      ...formData,
      phone_no: event.target.value,
    });
  };
  const total_priceChangeHandler = (event) => {
    setFormData({
      ...formData,
      total_price: event.target.value,
    });
  };
  const productsIDChangeHandler = (event) => {
    setFormData({
      ...formData,
      productsID: event.target.value,
    });
  };
  const countChangeHandler = (event) => {
    setFormData({
      ...formData,
      count: event.target.value,
    });
  };
  const OrderFormSubmitHandler = (event) => {
    event.preventDefault();
    // categoriesSubmitHandler(checkedState);
    console.log(formData.categories);

    fetch("http://35.78.92.72:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost",
      },
      credentials: "include",
      body: JSON.stringify({
        //보내는부분 백이 body에 뭐가 오면 처리하게되어있음
      
        user_id: formData.user_id,
        orderer_name: formData.orderer_name,
        receiver_name: formData.receiver_name ,
        address: formData.address ,
        zipcode: formData.zipcode ,
        phone_no:  formData.phone_no,
        total_price: formData.total_price,
        productsID: formData.productsID,
        count: formData.count,

      }),
    });
    navigate("/Orders");
  };
  return (
    <div>
      <form onSubmit={OrderFormSubmitHandler}>
        <div>
          <input type="number" name="" id=""  onChange={user_idChangeHandler} />
          <input type="text" onChange={orderer_nameChangeHandler}/>
          <input type="text" onChange={receiver_nameChangeHandler}/>
          <input type="text" onChange={zipcodeChangeHandler}/>
          <input type="text" onChange={phone_noChangeHandler}/>
          <input type="number" name="" id="" onChange={total_priceChangeHandler}/>
          <input type="text" onChange={productsIDChangeHandler}/>
          <input type="text" onChange={countChangeHandler}/>
        </div>
        <input type="" />

        <button></button>
      </form>
    </div>
  );
};

export default OrderForm;
