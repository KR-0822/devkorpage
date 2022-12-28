import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./shared/components/navigation/NavBar";
import Users from "./users/pages/Users";
import Products from "./products/pages/Products";
import MainImage from "./home/MainImage";
import Collections from "./collections/components/pages/Fashions";
import ProductDetail from "./products/pages/ProductDetail";
import Login from "./Auth/pages/Login";
import Signup from "./Auth/pages/Signup";
import AboutUs from "./Aboutus/pages/aboutus";
import Carts from "./carts/pages/Carts";
import ProductAddForm from "./products/components/ProductAddForm";
import ProductUpdateForm from "./products/components/ProductUpdateForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<MainImage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Signup/>} />
          <Route path="/carts" element={<Carts/>} />
          <Route path="/products/add" element={<ProductAddForm />} />
          {/* <Route path="/" element={} /> */}
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
