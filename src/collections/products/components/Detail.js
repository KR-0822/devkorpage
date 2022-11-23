const Detail = (props) => {
  const {id, name, image, price } = props.product
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text">
        {name}
        {id}
      </div>
      <div className="size">{/* selectbar */}</div>
      <div className="purchase">
        {price}
        <button>wishlist</button>
        <button>purchase</button>
        <button>edit</button>
      </div>
      <div></div>
    </div>
  );
};
export default Detail;
