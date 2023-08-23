import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location }) => {
  const mapStyles = {
    height: '450px',
    width: '100%',
  };

  const defaultCenter = {
    lat:  14.54138,
    lng: 79.873827,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBAVaYYfAZXwiyYzxQRiG_NS9y4n_8w2B8">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
