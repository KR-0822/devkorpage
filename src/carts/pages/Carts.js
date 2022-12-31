import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../Auth/Auth-context";
import ProductList from "../../products/components/ProductList";

const Carts = () => {
  const authCtx = useContext(AuthContext);
  const cartID = authCtx.cartID
  const [carts, setCarts] = useState({
    num_Items: 0,
    product: [{}],
  });

  useEffect(() => {
    fetch(`http://localhost:3000/carts/${cartID}`, {
      headers: { "Access-Control-Allow-Origin": "http://localhost" },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCarts({
          num_Items: data[0].num_Items,
          product: data[0].product,
        });
      });
  }, []);
  return (
    <div>
      <ProductList items={carts.product} />
    </div>
  );
};

export default Carts;
