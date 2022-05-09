import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../styles.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoidnNhbnRhbmEyNyIsImEiOiJjbDJydXhjMmQzOHF4M2NzYmdoMDhvdThzIn0.R1z752sYbHdCoCua5KmBOg';

function FindStudyGroup() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng = -72.5257;
    const lat = 42.39;
    const zoom = 18;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });

    const [location, setLocation] = useState('');
    const [floor, setFloor] = useState('');
    const [room, setRoom] = useState('');

    const [showMap, setShowMap] = useState(false);

    const handleFilter = () => {
        if(location === '' || floor === '' || room === ''){
            alert("Please make sure all dropdowns are selected before filtering.");
        } else{
            setShowMap(true);
        }
    }

    return(
            <div className="container">
                <div className="row">
                <div class="mb-1 mt-3 row">
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Select a location" onChange={e => setLocation(e.target.value)}>
                                <option selected>Select Building</option>
                                <option value="cs">Engineering Lab I</option>
                                <option value="math">Engineering Lab II</option>
                                <option value="econ">Franklin Dining Common</option>
                                <option value="pm">Hasbrouck Laboratory</option>
                                <option value="pm">Herter Hall</option>
                                <option value="pm">Integrated Learning Center</option>
                                <option value="pm">Lederle Engineering Library</option>
                                <option value="pm">Lederle Research Tower</option>
                                <option value="pm">Morrill Science I</option>
                                <option value="pm">Morrill Science II</option>
                                <option value="pm">Morrill Science II</option>
                                <option value="pm">Morrill Science IV</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Select a floor" onChange={e => setFloor(e.target.value)}>
                                <option selected>Select Floor</option>
                                <option value="1">1st floor</option>
                                <option value="2">2nd floor</option>
                                <option value="3">3rd floor</option>
                                <option value="any">Any floor</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Select a room" onChange={e => setRoom(e.target.value)}>
                                <option selected>Select a room</option>
                                <option value="n111">N111</option>
                                <option value="n151">N151</option>
                                <option value="s120">S120</option>
                                <option value="s131">S131</option>
                                <option value="s140">S140</option>
                            </select>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary mt-3" onClick={() => {handleFilter()}}>Filter</button>
                </div>
                <div className="row">
                {(showMap) ? (
                    <>
                        <div className="map-container m-2">
                            <div ref={mapContainer} className="map-display" />
                        </div>

                        <button type="button" class="btn btn-primary mt-3">Create</button>
                    </>
                ) :
                (
                    <div className="display-4 text-secondary">Results will display here once all filters are selected and applied</div>
                )}
                </div>
            </div>
    );
}

export default FindStudyGroup;