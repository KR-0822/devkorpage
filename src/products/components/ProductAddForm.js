import { useState } from "react";

const ProductAddForm = () => {
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


  const categoriesCheckHandler = (event, position) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      if (index === position) {
        return !item;
      } else {
        return item;
      }
    });
    setCheckedState(updatedCheckedState);
    console.log(checkedState)
  };


  const categoriesSubmitHandler= (checkedState) =>{
    let updateCategory= new Array();
    checkedState.forEach((isChecked ,index)=> {
      if(isChecked){
        updateCategory = [...updateCategory,categories[index]]
      }
    })
    setFormData(
      {
        ...formData,
        categories : updateCategory
      }
    )
  }



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
    setFormData({
      ...formData,
      photos: event.target.value,
    });
  };

  const AddProductSubmitHandler = (event) => {
    event.preventDefault();
    categoriesSubmitHandler(checkedState);
    console.log(formData.categories)


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
    }).then((response) => {
      const rs = response.json();
      console.log(rs);
      return rs;
    });
  };
  return (
    <form onSubmit={AddProductSubmitHandler}>
      <input type="text" onChange={nameChangeHandler} />
      <input type="number" name="" id="" onChange={priceChangeHandler} />
      <input type="number" name="" id="" onChange={stockChangeHandler} />
      <input type="text" name="" id="" onChange={descriptionChangeHandler} />
      {categories.map((category, index) => {
          return (
            <li key={index}>
              {index}
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={category}
                    value={category}
                    checked={checkedState[index]}
                    onChange={(event) => categoriesCheckHandler(event, index)}
                  />
                  <label>{category}</label>
                </div>
            </li>
          );
        })}
      <button type="submit"></button>
    </form>
  );
};

export default ProductAddForm;