import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./shared/components/navigation/NavBar";
import Users from "./users/pages/Users";
import Products from "./products/pages/Products";
import MainImage from "./home/MainImage";
import Collections from "./collections/components/pages/Fashions";
import ProductDetail from "./products/pages/ProductDetail";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";
import AboutUs from "./Aboutus/pages/aboutus";

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
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup/>} />
          {/* <Route path="/" element={} /> */}
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
