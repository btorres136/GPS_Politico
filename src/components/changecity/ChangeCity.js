import React from 'react'
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import ChangeCityInfo from './ChangeCityInfo';

const ChangeCity = () => {
    return (
        <div className="wrapper">
        <Sidebar />
        <main className="content color-tertiary">
          <Navbar />
          <ChangeCityInfo />
        </main>
      </div>
    )
}

export default ChangeCity
