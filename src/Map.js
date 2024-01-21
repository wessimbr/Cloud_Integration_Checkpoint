import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ center }) => {
  // Default properties for the map
  const defaultProps = {
    zoom: 14,
  };

  return (
    <div style={{ height: '300px', width: '500px' ,border: '1px solid black' , padding:'5px' }}>
       {/* GoogleMapReact component with API key */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg' }}
        defaultCenter={center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
};
// Export the Map component
export default Map;