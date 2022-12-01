import { Link } from "react-router-dom";
import Card from "../../shared/UI/Card";
import './ProductList.css'

const ProductItem = (props) => {
  return (
    <li>
      <Card>
        <Link to={`/products/${props.id}`}>
          <img className="productpic" src={props.image} alt="" />
        </Link>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
      </Card>
    </li>
  );
};

export default ProductItem;
