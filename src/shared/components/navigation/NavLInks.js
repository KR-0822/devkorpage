import { NavLink } from "react-router-dom";
import './NavLinks.css';
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaUserAlt, FaShoppingBag } from "react-icons/fa";
import logo_image1 from "./Devkor2.png";
const NavLinks = () => {
  return (
    
      

    <ul className="nav-links">
      <li>  
      <div className="LOGO">
        <img className="LOGO" src={logo_image1} alt="main_image" />
      </div>
      </li>
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" end>
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/Aboutus" end>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" end>
          Products
        </NavLink>
      </li>
      <ul>
      <li className="righticons">
        <NavLink to="" end>
        <FaSearch size="20" color="" /> 
        </NavLink>
        <NavLink to="" end>
        <FaRegHeart size="20" color="" /> 
        </NavLink>
        <NavLink to="Login" end>
        <FaUserAlt size="20" color="" /> 
        </NavLink>
        <NavLink to="" end>
        <FaShoppingBag size="20" color="" /> 
        </NavLink>
      </li>
      </ul>
      
    </ul>
    
  );
};


export default NavLinks;