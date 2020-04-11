import React from "react";
import "./Dashboard.scss";

const ACity = ({ cities }) => {
  return (
    <>
      {cities.map((data, idx) => {
        return (
          <div className="Cities">
            <div key={idx}>
              <div>{data.municipio}</div>
              <div>{data.x_lat}</div>
              <div>{data.y_lat}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ACity;
