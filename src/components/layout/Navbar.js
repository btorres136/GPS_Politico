import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../utils/firebase-functions";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg navbar-dark color-primary fixed-top">
      <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faMapMarkedAlt} className="size-35" />
        <div className="text-brand">
          <span className="text-brand--main">GPS</span>
          <span className="text-brand--sub">Politico</span>
        </div>
      </Link>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <Link
            to="/"
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faUserCircle} className="size-3" />
          </Link>
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
