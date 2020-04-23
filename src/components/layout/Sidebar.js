import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Bootstrap Sidebar</h3>
      </div>
      <ul class="list-unstyled">
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
