import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase-functions";
import ACity from "./ACity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import "./Spinner.scss";
const Cities = () => {

  const [cities, setcities] = useState([]);

  const [retrived, setretrieved] = useState(false);

  useEffect(() => {
    db.ref("/Pueblos").on("value" || "child_changed", (snapshot) => {
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
      {retrived ? ( <ACity cities={cities} />)
       : (
        <FontAwesomeIcon icon={ faSpinner } size="3x" className="spinner"/>
      )}
    </>
  );
};

export default Cities;
