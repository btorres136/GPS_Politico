import React from "react";

const ACandidate = ({ candidates }) => {
  return (
    <div className="Candidates">
      {candidates.map((data, idx) => {
        return (
          <div key={idx}>
            <div>{data.Alcaldia}</div>
            <div>{data.Nombre}</div>
          </div>
        );
      })}
    </div>
  );
};
export default ACandidate;
