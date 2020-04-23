import React, { createContext, useState, useEffect } from "react";
import { db } from "../utils/firebase-functions";

export const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [cities, setcities] = useState(null);
  const [municipio, setmunicipio] = useState("");
  const [retrieved, setretrieved] = useState(false);

  useEffect(() => {
    setretrieved(false);
    db.ref("/Candidatos/Municipio de " + municipio.name + "/Alcaldia").on(
      "value" || "child_changed",
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const info = [];
          for (let value in data) {
            info.push({
              Partido: { value },
              PicURL: data[value].PicURL,
              Nombre: data[value].Nombre,
              PartidoURL: data[value].PartidoURL,
              info: data[value].info,
            });
          }
          setcities(info);
          setretrieved(true);
        } else {
          setcities(null);
          setretrieved(true);
        }
      }
    );
  }, [municipio]);

  return (
    <CityContext.Provider value={{ cities, setmunicipio, retrieved, municipio }}>
      {children}
    </CityContext.Provider>
  );
};
export default CityProvider;
