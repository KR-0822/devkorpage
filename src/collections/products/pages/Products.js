import ProductList from "../components/ProductList";

import DUMMY_Products from "../components/DUMMY_PRODUCT";
const Products = () => {
    return (
        <div>
        <ProductList items={DUMMY_Products} />
        <button>ADD</button>
        </div>
    );
}

export default Products;