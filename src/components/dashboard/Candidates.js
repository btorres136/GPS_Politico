import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-functions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ACandidate from "./ACandidate";

export const Candidates = () => {
  const [candidates, setcandidates] = useState([]);
  const [retrived, setretrieved] = useState(false);
  useEffect(() => {
    db.ref("/Candidatos").on("value" || "child_changed", (snapshot) => {
      const data = snapshot.val();
      const newval = [];
      for (let value in data) {
        newval.push({
          Alcaldia: value,
          Nombre: data[value].Alcaldia.Nombre,
          PartidoURL: data[value].Alcaldia.PartidoURL,
          PicURL: data[value].Alcaldia.PicURL,
          info: data[value].Alcaldia.info,
        });
      }
      setcandidates(newval);
      setretrieved(true);
    });
  }, []);
  return (
    <div>
      {retrived ? (
        <ACandidate candidates={candidates} />
      ) : (
        <FontAwesomeIcon icon={faSpinner} size="3x" className="spinner"/>
      )}
    </div>
  );
};
