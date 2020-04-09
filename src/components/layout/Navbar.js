import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="nav-wapper darker-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          GPS Politico
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
