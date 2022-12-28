import { useEffect, useState } from "react";
import ProductList from "../../products/components/ProductList";

const Carts = () => {
  const [carts, setCarts] = useState({
    id: 0,
    num_Items: 0,
    product: [{}],
  });
  const cartID = 2; // 이거 받아오게 하기 쿠키에 집어넣어서?
  useEffect(() => {
    fetch(`http://35.78.92.72:3000/carts/${cartID}`, {
      headers: { "Access-Control-Allow-Origin": "http://localhost" },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0]);
        setCarts({
          id: data[0].id,
          num_Items: data[0].num_Items,
          product: data[0].product,
        });
        
      });
  }, []);

  return <div>
    <ProductList items ={carts.product}/> 
    </div>;
};

export default Carts;
