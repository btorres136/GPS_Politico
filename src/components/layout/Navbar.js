import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { auth } from "../utils/firebase-functions";

const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const activeSidebar = () => {
    if (!sidebar) {
      setsidebar(true);
      document.getElementById("sidebar").classList.add("active");
    } else {
      setsidebar(false);
      document.getElementById("sidebar").classList.remove("active");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-lg navbar-dark color-primary">
      <button type="button" className="btn btn-info" onClick={activeSidebar}>
        <FontAwesomeIcon icon={faBars} className="BarsIcon" />
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <FontAwesomeIcon icon={faUser} className="UserIcon" />
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/" className="dropdown-item" href="#">
              Profile
            </Link>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={() => auth.signOut()}>
              SignOut
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
