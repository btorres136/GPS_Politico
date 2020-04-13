import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./MapContainer.scss";
import "./Spinner.scss";
import CityInfo from "./CityInfo";

const mapStyles = {
  position: "relative",
  width: "inherit",
  height: "inherit",
  minHeight: "inherit",
};
const MapContainer = (props) => {
  const [state, setstate] = useState("");
  const [markers, setmarkers] = useState();
  const onClick = (mapProps, map, e) => {
    setstate({
     name: map.name,
     lat: map.data.lat,
     lng: map.data.lng,
    });
  };
  useEffect(() => {
    let mark = [];
    props.cities.map((data, idx) => {
      mark.push(
        <Marker
          key={idx}
          onClick={onClick}
          position={{ lat: data.y_lat, lng: data.x_lat }}
          name={data.municipio}
          data={{ lat: data.y_lat, lng: data.x_lat }}
        />
      );
    });
    setmarkers(mark);
  }, [props.cities]);

  return (
    <div className="MapContainer">
      <div className="Map">
        <Map
          containerStyle={mapStyles}
          google={props.google}
          zoom={9.5}
          minZoom={9}
          restriction={{
            LatLngBoundsLiteral: { north: 30, south: 55, west: 20, east: 35 },
            strictBounds: true,
          }}
          initialCenter={{
            lat: 18.2208328,
            lng: -66.4,
          }}
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
  <FontAwesomeIcon icon={faSpinner} size="3x" className="spinner" />
);
export default GoogleApiWrapper({
  apiKey: "AIzaSyBqiRTTmkxW4xqDsZDdUzmrI6MVMUuDWE4",
  LoadingContainer: LoadingContainer,
})(MapContainer);
