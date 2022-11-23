import { Link } from "react-router-dom";
import Card from "../../shared/UI/Card";

const ProductItem = (props) => {
  return (
    <li>
      <Card>
        <Link to={`/products/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
      </Card>
    </li>
  );
};

export default ProductItem;
