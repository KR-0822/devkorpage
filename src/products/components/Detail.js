const Detail = (props) => {
  //없는 상품 처리
  const {id, name, image, price} = props.product
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text">
        {name}
        {id}
        {price}
      </div>
      <div className="size">{/* selectbar */}</div>

      <div></div>
    </div>
  );
};
export default Detail;
