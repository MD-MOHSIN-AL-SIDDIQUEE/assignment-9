import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const GoogleMap = (props) => {
    
    const defaultProps = {
        center: {
          lat: 22.000990,
          lng: 88.679893
        },
        zoom: 11
      };
    return (
        <div>
       <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBwKJ_xnej0P69mI02VHlF83ijXR34lsGc" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>
        </div>
    );
};

export default GoogleMap;


