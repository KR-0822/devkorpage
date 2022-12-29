
import { Link } from "react-router-dom";
import Card from "../../shared/UI/Card";
import './Productitem.css'

const ProductItem = (props) => {
  return (
      <div className="Cardpic">
        <Link to={`/products/${props.id}` }  style={{ textDecoration: 'none' }}>
          <div className="productpicc">
            <img className="productpic2" width="400" height="290" src={props.image} alt="" />
          </div>
        <h2 className="productname" >{props.name}</h2>
        </Link> 
        <h3 className="price">${props.price}</h3>
      </div>
  );
};

export default ProductItem;
