import ProductItem from "./ProductItem";
import ProductAddForm from "./ProductAddForm";

import { NavLink } from "react-router-dom";
import "./ProductList.css"
const ProductList = (props) => {

    if(props.items.length === 0){
        return (
            <ul>
            {props.items.map((product)=>(
                <ProductItem key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} />
            ))}
            <div>
            <NavLink to="/ProductAddForm" end>
            <button class="Add">ADD</button>
            </NavLink>
            </div>

        </ul>);
    }
    return (
        <ul>
            {props.items.map((product)=>(
                <ProductItem key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} />
            ))}
            <div>
            <NavLink to="/ProductAddForm" end>
            <button class="Add">ADD</button>
            </NavLink>
            </div>
        </ul>
    );
}

export default ProductList;
 