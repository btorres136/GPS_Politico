import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import CityInfo from "./CityInfo";
const styles = require("../../resources/JSON/MapStyle.json");

const mapStyles = {
  position: "relative",
  width: "inherit",
  height: "inherit",
  minHeight: "inherit",
};
const MapContainer = (props) => {
  const [markers, setmarkers] = useState();
  const [state, setstate] = useState("");
  const onClick = (info, e) => {
    setstate({
      name: info.municipio,
      lat: info.y_lat,
      lng: info.x_lat,
    });
  };
  useEffect(() => {
    let mark = [];
    props.cities.map((data, idx) => {
      mark.push(
        <Marker
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
            fillColor: "#edae49",
            fillOpacity: 0.9,
            strokeWeight: 0.3,
            rotation: 0,
          }}
        />
      );
      return null;
    });
    setmarkers(mark);
  }, [props.cities]);
  return (
    <div className="MapContainer">
      <div className="Map">
        <Map
          containerStyle={mapStyles}
          google={props.google}
          zoom={11}
          minZoom={11}
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
      <div className="info">
        <CityInfo municipio={state} />
      </div>
    </div>
  );
};
const LoadingContainer = (props) => (
  <div className="SpinnerContainer">
    <FontAwesomeIcon icon={faSpinner} size="3x" className="spinner" />
  </div>
);
export default GoogleApiWrapper({
  apiKey: "AIzaSyBqiRTTmkxW4xqDsZDdUzmrI6MVMUuDWE4",
  LoadingContainer: LoadingContainer,
})(MapContainer);
