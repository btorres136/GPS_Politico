import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import MapContainer from "./MapContainer";
const Cities = () => {
  const [cities, setcities] = useState([]);
  const [retrived, setretrieved] = useState(false);

  useEffect(() => {
    db.ref("/Pueblos").on("value", (snapshot) => {
      const data = snapshot.val();
      const newval = [];
      for (let value in data) {
        newval.push({
          municipio: data[value].municipio,
          x_lat: data[value].x_long,
          y_lat: data[value].y_lat,
        });
      }
      setcities(newval);
      setretrieved(true);
    });
  }, []);
  return (
    <>
      {retrived ? (
        <MapContainer cities={cities} />
      ) : (
        <div className="SpinnerContainer">
          <FontAwesomeIcon icon={faSpinner} size="3x" className="spinner" />
        </div>
      )}
    </>
  );
};

export default Cities;
