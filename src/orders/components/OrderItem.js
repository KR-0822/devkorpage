
import Card from "../../shared/UI/Card";

const OrderItem = (props) => {
    console.log(props)
  return (
    <li>
      <Card>
        <h3>{props.order_no}</h3>
        <h3>{props.orderer_name}</h3>
        <h3>{props.receiver_name}</h3>
        <h3>{props.address}</h3>
        <h3>{props.zipcode}</h3>
        <h3>{props.phone_no}</h3>
        <h3>{props.total_price}</h3>
      </Card>
    </li>
  );
};

export default OrderItem;
