import React, { useContext } from "react";
import { CityContext } from "../providers/CityProviders";
import { Redirect } from "react-router-dom";

const ChangeCityInfo = () => {
  const { cities, municipio } = useContext(CityContext);
  console.log(cities);
  if (!municipio) {
      return <Redirect to="/Dashboard/Home" />;
  }
  const info = [];
  for(let value in cities){
    info.push(
        <div key={value}>
            <p>{cities[value].Nombre}</p>
            <p>{cities[value].info}</p>
            <p>{cities[value].PicURL}</p>
            <p>{cities[value].PartidoURL}</p>
        </div>
    )
  }
  return (
    <div className="text-light">
      <p>{municipio.name}</p>
      <p>{municipio.lat}</p>
      <p>{municipio.lng}</p>
      <div>{info}</div>
    </div>
  );
};

export default ChangeCityInfo;
