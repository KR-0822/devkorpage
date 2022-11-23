import { NavLink } from "react-router-dom";
import './NavLinks.css';
const NavLinks = () => {
  return (
    <ul className="nav-links">
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
        <NavLink to="/products" end>
          Products
        </NavLink>
      </li>
    </ul>
  );
};


export default NavLinks;