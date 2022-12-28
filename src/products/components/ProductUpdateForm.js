import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const ProductUpdateForm = (props) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const categories = ["female", "male"]; //이거 백에서 받아오게 바꾸기
  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  );
  const [formData, setFormData] = useState({
    name: props.product.name,
    price: props.product.price,
    categories: props.product.categories,
    stock: props.product.stock,
    description: props.product.description,
    photos: props.photos
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
  }; // 여러개 받도록 수정하기
  const updateProductSubmitHandler = (event) => {
    event.preventDefault();
    categoriesSubmitHandler(checkedState);
    console.log(formData.categories);

    fetch(`http://localhost:3000/products/${productId}`, {
      method: "PATCH",
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
    <form onSubmit={updateProductSubmitHandler}>
      <input type="text"  value={formData.name} onChange={nameChangeHandler} />
      <input type="number" value={formData.price} name="" id="" onChange={priceChangeHandler} />
      <input type="number" value={formData.stock} name="" id="" onChange={stockChangeHandler} />
      <input type="text" value={formData.description} name="" id="" onChange={descriptionChangeHandler} />
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
                checked={checkedState[index]} // 여기 바꾸기
                onChange={(event) => categoriesCheckHandler(event, index)}
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


// 카테고리, 사진 한 번 싹 다시 하기
export default ProductUpdateForm;
