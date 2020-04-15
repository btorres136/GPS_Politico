import React from "react";
import Navbar from "../layout/Navbar";
import Cities from "./Cities";
import Sidebar from "../layout/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="Dashboard-inner">
        <Cities />
      </div>
    </>
  );
};

export default Dashboard;
