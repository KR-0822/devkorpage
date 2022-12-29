import ProductItem from "./ProductItem";
import ProductAddForm from "./ProductAddForm";

import { NavLink } from "react-router-dom";
import "./ProductList.css";
import ProductNotFound from "../../shared/Error/ProductNotFound";
const ProductList = (props) => {
  if (props.items.length === 0) {
   return <ProductNotFound></ProductNotFound>
  }

  
  return (
    <ul>
      {props.items.map((product) => {
        { 
          let images;
          if(!product.photos){
            images = <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                image={""}
                price={product.price}
              />
              return images
          }
          if (product.photos[0]) {
            const url = product.photos[0].url
            images = (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                image={url}
                price={product.price}
              />
            );
          } 
          else {
            images = (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                image={""}
                price={product.price}
              />
            );
          }
          return images
        }
      })}
    </ul>
  );
};

export default ProductList;
