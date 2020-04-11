import React from "react";
import "./Dashboard.scss";

const ACandidate = ({ candidates }) => {
  return (
    <>
      {candidates.map((data, idx) => {
        return (
          <div className="Candidates">
            <div key={idx}>
              <div>{data.Alcaldia}</div>
              <div>{data.Nombre}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ACandidate;
