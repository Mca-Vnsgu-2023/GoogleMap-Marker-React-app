import { useState } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';


function MapComponent() {
    const [markers, setMarkers] = useState([]);
    const [markerLabels, setMarkerLabels] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const handleMapClick = (event) => {
        const newMarker = {
            position: {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            },
        };

        setMarkers([...markers, newMarker]);
        const nextLabel = alphabet[markers.length % alphabet.length];
        setMarkerLabels([...markerLabels, nextLabel]);
    };

    return (
        <GoogleMap
            defaultZoom={4}
            defaultCenter={{ lat: 0, lng: 0 }}
            onClick={handleMapClick}
        >
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={marker.position}
                    onClick={() => setSelectedMarker(marker)}
                    label={markerLabels[index]}
                />
            ))}

            {selectedMarker && (
                <InfoWindow
                    position={selectedMarker.position}
                    onCloseClick={() => setSelectedMarker(null)}
                >
                    <div>
                        <p>Marker Label</p>
                        <p>Latitude: {selectedMarker.position.lat}</p>
                        <p>Longitude: {selectedMarker.position.lng}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export const WrappedMapComponent = withScriptjs(withGoogleMap(MapComponent));
