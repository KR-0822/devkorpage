import OrderItem from "./OrderItem";

const OrderList = (props) => {
  if (props.items.length === 0) {
    <h1>Order Not Found</h1>
  }

  return (
    <ul>
      {props.items.map((order) => (
        <OrderItem key={order.order_no} order_no={order.order_no} orderer_name={order.orderer_name} receiver_name={order.receiver_name}
        zipcode ={order.zipcode} address = {order.address} phone_no ={order.phone_no} total_price = {order.total_price}
        ></OrderItem>
      )
      )}
    </ul>
  );
};

export default OrderList;
