import ProductList from "../components/ProductList";

import DUMMY_Products from "../components/DUMMY_PRODUCT";
const Products = () => {
<<<<<<< Updated upstream
    return (
        <div>
        <ProductList items={DUMMY_Products} />
        <button>ADD</button>
=======
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/products", {
          headers: { "Access-Control-Allow-Origin": "http://localhost" },
          credentials: 'include',
    
        })
          .then((response) => {
            
            return response.json();
          })
          .then((data) => {
            console.log(data)
            setProducts(data);
          });
      }, []);
      return (
        
        <div>
        <ProductList items={products} />
>>>>>>> Stashed changes
        </div>
    );
}

export default Products;