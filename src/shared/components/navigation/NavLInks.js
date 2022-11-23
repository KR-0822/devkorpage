import { NavLink } from "react-router-dom";
import './NavLinks.css';
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaUserAlt, FaShoppingBag } from "react-icons/fa";

const NavLinks = () => {
  return (
    <ul>


    <ul className="nav-links">
      <ul>  
      <div className="LOGO">
        <img className="LOGO" src={"https://logolook.net/wp-content/uploads/2021/12/Dior-Logo.png"} alt="main_image"  />
      </div>
      </ul>
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
      <div className="righticons">
        <FaSearch size="20" color="" /> &nbsp;&nbsp;
        <FaRegHeart size="20" color="" /> &nbsp;&nbsp;
        <FaUserAlt size="20" color="" /> &nbsp;&nbsp;
        <FaShoppingBag size="20" color="" /> &nbsp;&nbsp;
      </div>
      </ul>
      
    </ul>
    </ul>
  );
};


export default NavLinks;