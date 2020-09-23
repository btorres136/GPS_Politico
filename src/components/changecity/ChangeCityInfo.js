import React, { useContext, useState } from "react";
import { CityContext } from "../providers/CityProviders";
import { Redirect } from "react-router-dom";
import ChangeData from "./ChangeData";
import { Collapse } from "react-bootstrap";

const ChangeCityInfo = () => {
  const { cities, municipio } = useContext(CityContext);

  const [edit, setedit] = useState(false);
  //const [data, setdata] = useState(null);

  //db.ref("/Candidatos/Municipio de " + municipio.name + "/Alcalde").update();

  if (!municipio) {
    return <Redirect to="/Dashboard/Home" />;
  }
  const info = [];
  for (let value in cities) {
    info.push(
      <div key={value}>
        <ChangeData
          cities={cities[value]}
          value={cities[value].Partido.value}
        />
      </div>
    );
  }
  return (
    <div className="changecity text-light">
      <div>
        <h2>Municipio de {municipio.name}</h2>
        <p>Latitud: {municipio.lat}</p>
        <p>Longitud: {municipio.lng}</p>
        <button
          className="btn btn-info"
          onClick={() => (edit ? setedit(false) : setedit(true))}
        >
          Change City Info
        </button>

        <Collapse in={edit}>
          <div>
            <div className="form-group row">
              <label for="name">Name: </label>
              <input id="name" className="form-control" type="text" />
              <button>Change Name</button>
            </div>
            <div className="form-group row">
              <label for="latitud">Latitud: </label>
              <input id="latitud" className="form-control" type="text" />
              <button>Change Latitud</button>
            </div>
            <div className="form-group row">
              <label for="longitud">Longitud: </label>
              <input id="longitud" className="form-control" type="text" />
              <button>Change Longitud</button>
            </div>
          </div>
        </Collapse>
      </div>

      {info}
      <div className="form-group row">
        <button className="btn btn btn-info">Añadir nuevo candidato</button>
      </div>
    </div>
  );
};

export default ChangeCityInfo;
