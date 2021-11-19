import React, { useEffect, useState } from 'react';
import store from '../store';

const Map = () => {
    const [mapCenter, setMapCenter] = useState(store.getState().coordinates);
    const [coordinates, setCoordinates] = useState();

    useEffect(() => {
        onMapLoad();
    }, [coordinates, mapCenter]);

    const onMapLoad = () => {
        const map = new window.google.maps.Map(
            document.getElementById('map'),
            {
                center: mapCenter,
                zoom: 12
            }
        );

        new window.google.maps.Marker({
            position: coordinates,
            map: map
        });
    };

    store.subscribe(() => {
        const search = store.getState().coordinates;

        setMapCenter(search);
        setCoordinates(search);
    });

    return <div style={{ width: '100%', height: 500 }} id='map' />;
}

export default Map;
