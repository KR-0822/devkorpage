import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import DUMMY_Products from "../components/DUMMY_PRODUCT";
const ProductDetail = () =>{
    const { productId } = useParams();
    const thisProduct = DUMMY_Products.find(prod => prod.id === productId);
    return (
        <Detail product = {thisProduct} ></Detail>
    );

}

export default ProductDetail