const OrderForm = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    orderer_name: "",
    receiver_name: "",
    address: "",
    zipcode: "",
    phone_no: "",
    total_price: "",
    productsID: [],
    count: [],
  });

  return (
    <div>
      <form>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <input type="" />

        <button></button>
      </form>
    </div>
  );
};

export default OrderForm;
