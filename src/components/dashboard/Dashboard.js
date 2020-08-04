import React from "react";
import Navbar from "../layout/Navbar";
import Cities from "./Cities";
import Sidebar from "../layout/Sidebar";
const Dashboard = () => {  
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="content color-white">
        <Navbar />
        <Cities />
      </main>
    </div>
  );
};

export default Dashboard;
