import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  position: "relative",
  width: "100%",
  "min-height": "60vh",
};
const MapContainer = (props) => {
  return (
    <Map
      containerStyle={mapStyles}
      google={props.google}
      //zoom={9.5}
      //minZoom={9}
      restriction={{
        LatLngBoundsLiteral: {north: 30, south: 55, west: 20, east: 35},
        strictBounds: true,
      }}
      initialCenter={{
        lat: 18.2208328,
        lng: -66.4,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDRp2tE1Rf1hj37USaJU58uzGvHN0WjlHs",
})(MapContainer);
