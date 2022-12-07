import ProductList from "../components/ProductList";

import DUMMY_Products from "../components/DUMMY_PRODUCT";
const Products = () => {
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
        </div>
    );
}

export default Products;