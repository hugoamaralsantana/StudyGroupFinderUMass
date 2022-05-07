import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoidnNhbnRhbmEyNyIsImEiOiJjbDJydXhjMmQzOHF4M2NzYmdoMDhvdThzIn0.R1z752sYbHdCoCua5KmBOg';

function FindStudyGroup() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng = -72.5265;
    const lat = 42.39;
    const zoom = 14.5;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });

    return(
                <div className="map-container border border-primary m-2">
                    <div ref={mapContainer} className="map-display shadow-lg" />
                </div>
    );
}

export default FindStudyGroup;