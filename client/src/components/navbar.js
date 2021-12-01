import React from "react";
import { NavLink } from "react-router-dom";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// Here, we display our Navbar
const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark shadow-sm py-0">
      <div className="container">
        <NavLink className="navbar-brand py-0" to="/">
        <img
              src="/luxoft-new-white.svg"
              alt="Luxoft"
              height="50"
              width="80"
            />
        </NavLink>
      </div>
    </div>
  );
};
 
export default Navbar;