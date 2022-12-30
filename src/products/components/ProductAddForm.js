import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ProductAddForm.css'
const ProductAddForm = () => {
  const navigate = useNavigate();

  const categories = ["female", "male"]; //이거 백에서 받아오게 바꾸기
  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  );
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    categories: [],
    stock: 0,
    description: "",
    photos: {
      url: [],
    },
  });
  const [disabled, setDisabled] = useState(false);
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

  const categoriesCheckHandler = (event, index) => {
    if (event.target.checked) {
      checkedState[index] = true;
    } else {
      checkedState[index] = false;
    }
    //setCheckedState(updatedCheckedState);
  };

  const categoriesSubmitHandler = (checkedState) => {
    let updateCategory = new Array();
    checkedState.forEach((isChecked, index) => {
      if (isChecked) {
        updateCategory = [...updateCategory, categories[index]];
      }
    });
    setFormData({
      ...formData,
      categories: updateCategory,
    });
  }; //카테고리 하는거 다시 하기

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
        categories: formData.categories,
        stock: formData.stock,
        description: formData.description,
        photos: formData.photos,
      }),
    });

    navigate("/products");
  };
  return (
    <div>
      <form className="Container" onSubmit={addProductSubmitHandler}>
        <input className="Inputs"  placeholder="Name" type="text" onChange={nameChangeHandler} />
        <input className="Inputs" type="number"  placeholder="Price" name="" id="" onChange={priceChangeHandler} />
        <input className="Inputs" type="number"  placeholder="Stock" name="" id="" onChange={stockChangeHandler} />
        <input className="Inputs" type="text"  placeholder="Description" name="" id="" onChange={descriptionChangeHandler} />
        {categories.map((category, index) => {
          return (
            <li key={index}>
              {/* {index} */}
              
              <div>
                
                <input 
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={category}
                  value={category}
                  //checked={checkedState[index]}
                  onChange={(event) => categoriesCheckHandler(event, index)}
                />
                <label>{category}</label>
              </div>
            </li>
          );
        })}
        <input className="Inputs"  placeholder="Image URL" type="url" name="" id="" onChange={photosChangeHandler}/>

        
        <button className="Button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductAddForm;
