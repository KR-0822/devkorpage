import React from "react";
import ReactDOM from "react-dom";
import './SideDrawer.css'


const SideDrawer = (props) => {
    const drawer = <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    return ReactDOM.createPortal(drawer, document.getElementById('drawer'));
};
export default SideDrawer; 