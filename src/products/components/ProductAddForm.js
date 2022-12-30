import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ProductAddForm = () => {
  const navigate = useNavigate();
  const Categories = ["male", "female"]; //이거 백에서 받아오게 바꾸기
  const [checkedState, setCheckedState] = useState(
    new Array(Categories.length).fill(false)
  );
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    checkedCategories: [],
    stock: 0,
    description: "",
    photos: {
      url: [],
    },
  });
  const nameChangeHandler = (event) => {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  };
  const priceChangeHandler = (event) => {
    setFormData({
      ...formData,
      price: event.target.value,
    });
  };

  const stockChangeHandler = (event) => {
    setFormData({
      ...formData,
      stock: event.target.value,
    });
  };
  const descriptionChangeHandler = (event) => {
    setFormData({
      ...formData,
      description: event.target.value,
    });
  };
  const photosChangeHandler = (event) => {
    //formData.photos.url
    setFormData({
      ...formData,
      photos: {
        url: [event.target.value],
      }
    });
    console.log(formData.photos)
  }; // 여러개 받도록 수정하기

  const categoriesCheckHandler = (index) => {
    const updatedCheckedState = checkedState.map((checked, _index)=> index == _index ? !checked : checked)
    setCheckedState(updatedCheckedState)
    //setCheckedState(updatedCheckedState);
  };

  const categoriesSubmitHandler = (checkedState) => {
    let updateCategory = new Array();
    checkedState.forEach((isChecked, index) => {
      if (isChecked) {
        updateCategory = [...updateCategory, Categories[index]];
      }
    });
    console.log(updateCategory) // 업데이트는 잘 됨
    setFormData({
      ...formData,
      checkedCategories: updateCategory //왜 안 들어가는지 확인
    });
    console.log(formData)
  }; 


  const addProductSubmitHandler = (event) => {
    event.preventDefault();
    categoriesSubmitHandler(checkedState);
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost",
      },
      credentials: "include",
      body: JSON.stringify({
        //보내는부분 백이 body에 뭐가 오면 처리하게되어있음
        name: formData.name,
        price: formData.price,
        categories: formData.checkedCategories,
        stock: formData.stock,
        description: formData.description,
        photos: formData.photos,
      }),
    });
    navigate("/products");
  };




  return (
    <form onSubmit={addProductSubmitHandler}>
      <input type="text" onChange={nameChangeHandler} />
      <input type="number" name="" id="" onChange={priceChangeHandler} />
      <input type="number" name="" id="" onChange={stockChangeHandler} />
      <input type="text" name="" id="" onChange={descriptionChangeHandler} />
      {Categories.map((category, index) => {
        return (
          <li key={index}>
            <div>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={category}
                value={category}
                checked={checkedState[index]}
                onChange={()=>categoriesCheckHandler(index)}
              />
              <label>{category}</label>
            </div>
          </li>
        );
      })}
      <input type="url" name="" id="" onChange={photosChangeHandler}/>

      
      <button type="submit"></button>
    </form>
  );
};

export default ProductAddForm;
