import ProductItem from "./ProductItem";
import { NavLink } from "react-router-dom";
import "./ProductList.css"
const ProductList = (props) => {

    if(props.items.length === 0){
        return (
            <h1>Products Not Found</h1>
        );
    }
    return (
        <ul>
            {props.items.map((product)=>(
                <ProductItem key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} />
            ))}
            
        </ul>
    );
}

export default ProductList;
 