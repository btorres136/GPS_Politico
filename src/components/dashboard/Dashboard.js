import React from "react";
import Navbar from "../layout/Navbar";
import Cities from "./Cities";
import { Candidates } from "./Candidates";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./Dashboard.scss";
import MapContainer from "./MapContainer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="Dashboard">
        <MapContainer />
        <Candidates />
      </div>
    </>
  );
};

export default Dashboard;
