import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Bootstrap Sidebar</h3>
      </div>
      <ul className="list-unstyled">
        <p>Dummy Heading</p>
        <li>
          <Link to="/Dashboard/Home">Home</Link>
        </li>
        <li>
          <Link to="/Dashboard/Home">Representantes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
