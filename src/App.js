import React from 'react';
import './App.css';
import { WrappedMapComponent } from './components/Map/MapwithMarker';


function App() {

  const googleMapsApiKey = 'AIzaSyBPl-Ev3--gTDZT02HhqEWOYc46INeb6OU';
  const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`


  return (
    <div className="App">
      <div style={{ width: '100%', height: '500px' }}>
        <WrappedMapComponent
          googleMapURL={`${googleMapUrl}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </div>
  );
}

export default App;
