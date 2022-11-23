import React from "react";
import './NavToggleButton.css'

const NavToggleButton = (props) =>{
    return (
        <button className="menu-btn" onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default NavToggleButton