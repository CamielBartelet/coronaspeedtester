import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const defaultCenter = { lat: 40.748817, lng: -73.985428 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: "100%" };
const containerElementStyle = { height: "280px" };
const mapElementStyle = { height: "100%" };

export default function GoogleMaps() {
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLhZBYZdRAbNalX2jnB_BEMSEvoRiME60"
      loadingElement={<div style={loadingElementStyle} />}
      containerElement={<div style={containerElementStyle} />}
      mapElement={<div style={mapElementStyle} />}
    />
  );
}
