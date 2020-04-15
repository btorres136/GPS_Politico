import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const CityInfo = (props) => {
  const [cities, setcities] = useState([]);
  const [retrived, setretrieved] = useState(false);

  useEffect(() => {
    setretrieved(false);
    db.ref("/Candidatos/Municipio de " + props.municipio.name + "/Alcaldia").on(
      "value",
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const info = [];
          for (let value in data) {
            info.push(
              <>
                <hr />
                <div key={value} className="Candidate">
                  <p className="Candidate__party">{value}</p>
                  <img
                    src={data[value].PicURL}
                    className="Candidate__pic"
                    alt="Candidato"
                  />
                  <p className="Candidate__name">{data[value].Nombre}</p>
                  <p className="Candidate__info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur velit dolorum, corporis nobis pariatur tempore
                    eveniet. Nihil inventore molestias ratione, placeat suscipit
                    voluptas excepturi amet quisquam harum magnam repellat
                    laboriosam! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Debitis quos, dolorem doloremque ipsum
                    officiis nobis asperiores eveniet est, quidem atque velit.
                    Suscipit recusandae facere maxime dolore officia voluptates
                    cum iure!
                  </p>
                </div>
              </>
            );
          }
          setcities(info);
          setretrieved(true);
        } else {
          setcities(null);
          setretrieved(true);
        }
      }
    );
  }, [props.municipio.name]);

  if (!props.municipio) {
    return (
      <div className="SelectAdvise">
        <FontAwesomeIcon
          icon={faInfoCircle}
          size="5x"
          className="SelectAdvise__Icon"
        />
        <p className="SelectAdvise__text">Select a city to display info...</p>
      </div>
    );
  }
  if (!retrived) {
    return (
      <div className="SpinnerContainer" style={{ minHeight: "80vh" }}>
        <FontAwesomeIcon icon={faSpinner} size="3x" className="spinner" />
      </div>
    );
  }
  return (
    <div className="CityInfo">
      <h2 className="CityInfo__heading">Municipio de {props.municipio.name}</h2>
      <div className="CityPosition">
        <span className="CityPosition--lat">
          Latitud: {props.municipio.lat}
        </span>
        <span className="CityPosition--long">
          Longitud: {props.municipio.lng}
        </span>
      </div>
      <button className="btn editinfo">Edit Info</button>
      {cities ? (
        cities
      ) : (
        <div>
          <hr />
          <p>No info to display</p>
        </div>
      )}
    </div>
  );
};

export default CityInfo;
