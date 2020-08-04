import React, { useState, useEffect, useContext } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import CityInfo from "./CityInfo";
import { Collapse } from "react-bootstrap";
import { CityContext } from "../providers/CityProviders";
const styles = require("../../resources/JSON/MapStyle.json");

const mapStyles = {
  position: "relative",
  width: "inherit",
  height: "inherit",
  minHeight: "inherit",
};
const MapContainer = (props) => {
  const [markers, setmarkers] = useState();
  const [open, setopen] = useState(false);
  //const [state, setstate] = useState({});
  const { setmunicipio } = useContext(CityContext);

  useEffect(() => {
    const onClick = (info, e) => {
      document.getElementById("MapContainer").classList.remove("MapContainer");
      document.getElementById("Map").classList.remove("Map");

      document
        .getElementById("MapContainer")
        .classList.add("MapContainer--active");
      document.getElementById("Map").classList.add("Map--active");
      setopen(true);
      setmunicipio({
        name: info.municipio,
        lat: info.y_lat,
        lng: info.x_lat,
      });
    };

    let mark = [];
    props.cities.map((data, idx) => {
      mark.push(
        <Marker
          label={{text:data.municipio, color:"#666666", fontSize: "16"}}
          key={idx}
          onClick={onClick.bind(this, data)}
          position={{ lat: data.y_lat, lng: data.x_lat }}
          name={data.municipio}
          data={{ lat: data.y_lat, lng: data.x_lat }}
          //draggable={true}
          icon={{
            path:
              "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
            scale: 0.7,
            fillColor: "rgba(11, 57, 84,0.8)",
            fillOpacity: 0.9,
            strokeWeight: 0.3,
            rotation: 0,
          }}
        />
      );
      return null;
    });
    setmarkers(mark);
  }, [props.cities, setmunicipio]);

  return (
    <div id="MapContainer" className="MapContainer">
      <Collapse in={open}>
        <div>
          <div className="pb-4 text-light">
            <CityInfo />
          </div>
        </div>
      </Collapse>
      <div id="Map" className="Map">
        <Map
          containerStyle={mapStyles}
          google={props.google}
          zoom={10}
          minZoom={10}
          initialCenter={{
            lat: 18.2208328,
            lng: -66.4,
          }}
          styles={styles}
          mapTypeControl={false}
          streetViewControl={false}
        >
          {markers}
        </Map>
      </div>
    </div>
  );
};
const LoadingContainer = (props) => (
  <div className="load">
    <div className="spinner-grow text-color-blue spinner-wh" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
export default GoogleApiWrapper({
  apiKey: "AIzaSyBqiRTTmkxW4xqDsZDdUzmrI6MVMUuDWE4",
  LoadingContainer: LoadingContainer,
})(MapContainer);
