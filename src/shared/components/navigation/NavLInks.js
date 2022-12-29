import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaUserAlt, FaShoppingBag } from "react-icons/fa";
import AuthContext from "../../../Auth/Auth-context";
import logo_image1 from "./Devkor2.png";

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
            <NavLink to="/" end>
              <img className="LOGO" src={logo_image1} alt="main_image" />
            </NavLink>
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
        {isAdmin && (
          <li>
            <NavLink to="/orders/check">Orders</NavLink>
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
            <NavLink to="" end>
              <FaSearch size="22" color="" />
            </NavLink>
            <NavLink to="" end>
              <FaRegHeart size="22" color="" />
            </NavLink>
            {isLoggedIn && (
              <NavLink to="/auth/login">
                <FaUserAlt size="22" color="" />
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink to="/carts">
                <FaShoppingBag size="22" color="" />
              </NavLink>
            )}
            {!isLoggedIn && (
              <div className="container">
                <li>
                  <NavLink to="/auth/login">
                    <div className="Loginbutton">Login</div>
                  </NavLink>
                </li>
              </div>
            )}
          </div>
        </ul>
      </ul>
    </ul>
  );
};

export default NavLinks;
