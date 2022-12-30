import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth/Auth-context";
import "./OrderForm.css";

const OrderForm = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
 // const [checkedState, setCheckedState] = useState(
 //   new Array(categories.length).fill(false)
 // );
  const authCtx = useContext(AuthContext);
  const user_id = authCtx.userID  
  const total_price = location.state.count * location.state.product.price
  const [formData, setFormData] = useState({
    user_id: user_id,
    orderer_name: "",
    receiver_name: "",
    address: "",
    zipcode: "",
    phone_no: "",
    total_price: total_price,
    productName : location.state.product.name,
    productsID: [location.state.product.id],
    count: [location.state.count],
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
    fetch("http://localhost:3000/orders", {
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
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={OrderFormSubmitHandler}>
        <div className="Container">
          {/* <input type="number" name="" id="" className="Input" placeholder="ID" value={user_id} onChange={user_idChangeHandler} /> */}
          <input type="text" className="Input" placeholder="보내는분" onChange={orderer_nameChangeHandler}/>
          <input type="text" className="Input" placeholder="받는분" onChange={receiver_nameChangeHandler}/>
          <input type="text" className="Input" placeholder="주소" onChange={addressChangeHandler}/>
          <input type="text" className="Input" placeholder="우편번호" onChange={zipcodeChangeHandler}/>
          <input type="text" className="Input" placeholder="전화번호" onChange={phone_noChangeHandler}/>
          <input type="text" className="Input" placeholder="제품명" value={formData.productName} onChange={productsIDChangeHandler} disabled/>
          <input type="number" className="Input" placeholder="수량" value ={formData.count} onChange={countChangeHandler} disabled/>
          <input type="number" className="Input" placeholder="가격" name="" id="" value={formData.total_price} disabled />
          <button type="submit" className="Button"> 주문하기 </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
