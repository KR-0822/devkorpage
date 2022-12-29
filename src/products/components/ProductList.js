import ProductItem from "./ProductItem";
import "./ProductList.css";
const ProductList = (props) => {
  if (props.items.length === 0) {
    return <h1>Products Not Found</h1>;
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
