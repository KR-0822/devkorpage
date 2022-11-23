import "./NavBar.css";

import React, { Fragment, useState } from "react";

import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLInks";
import NavToggleButton from "./NavToggleButton";
import Backdrop from "../../UI/Backdrop";

const NavBar = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };


  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <NavToggleButton
          onClick={openDrawer}
        ></NavToggleButton>
        <nav className="menu-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default NavBar;
