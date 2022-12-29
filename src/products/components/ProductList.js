import ProductItem from "./ProductItem";
import ProductAddForm from "./ProductAddForm";

import { NavLink } from "react-router-dom";
import "./ProductList.css";
const ProductList = (props) => {
  if (props.items.length === 0) {
    return (
    
    <div className="page-404">
    <div className="outer">
        <div className="middle">
            <div className="inner">
                <div className="inner-circle"><i className="fa fa-home"></i><span>Error</span></div>
                <span className="inner-status">Oops! There is no product</span>
                <span className="inner-detail">
                  Sorry for the inconvenience.    
                    <a href="/" className="btn btn-info mtl"><i className="fa fa-home"></i>&nbsp;
                        Return home
                    </a> 
                </span>
            </div>
        </div>
    </div>
    </div>
    )
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
