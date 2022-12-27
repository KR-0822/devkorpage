import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaUserAlt, FaShoppingBag } from "react-icons/fa";
import AuthContext from "../../../Auth/Auth-context";
import { useContext } from "react";

const NavLinks = () => {
  const authCtx = useContext(AuthContext);
  const isAdmin = authCtx.isAdmin;
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <ul>
      <ul className="nav-links">
        <ul>
          <div className="LOGO">
            <img
              className="LOGO"
              src={
                "https://logolook.net/wp-content/uploads/2021/12/Dior-Logo.png"
              }
              alt="main_image"
            />
          </div>
        </ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        {isAdmin && (
          <li>
            <NavLink to="/users" end>
              Users
            </NavLink>
          </li>
        )}
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
            {isLoggedIn && (
              <NavLink to="/auth/login">
                <FaUserAlt size="20" color="" /> &nbsp;&nbsp;
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/carts">
                <FaShoppingBag size="20" color="" /> &nbsp;&nbsp;
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink to="/auth/login">
                <button>Login</button>
              </NavLink>
            )}
          </div>
        </ul>
      </ul>
    </ul>
  );
};

export default NavLinks;
