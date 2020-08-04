import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-functions";
import MapContainer from "./MapContainer";
const Cities = () => {
  const [cities, setcities] = useState([]);
  const [retrived, setretrived] = useState(false);

  useEffect(() => {
    db.ref("/Pueblos").on(("value" || "child_changed"), (snapshot) => {
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
      setretrived(true);
    });
  }, []);
  console.log(cities);
  return (
    <>
      {retrived ? (
        <MapContainer cities={cities} />
      ) : (
        <div className="load">
          <div className="spinner-grow text-color-blue spinner-wh" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Cities;
