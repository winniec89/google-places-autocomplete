import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { searchLocation } from "../actions";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './scss/autocomplete.scss';

const GoogleAutocomplete = () => {
    const dispatch = useDispatch();
    const [autocomplete, setAutocomplete] = useState(null);

    useEffect(() => {
        setAutocomplete(new window.google.maps.places.Autocomplete(
            document.getElementById('search-box'),
            { types: ['geocode'] }
        ));
    }, []);

    const handlePlaceSelect = () => {
        const addressObject = autocomplete.getPlace();
        const formattedAddress = addressObject.formatted_address;
        const coordinates = {
            lat: addressObject.geometry.location.lat(),
            lng: addressObject.geometry.location.lng()
        };
        dispatch(searchLocation({
            address: formattedAddress,
            coordinates
        }));
    };

    return (
        <div className="google-autocomplete" >
            <div className="title">Google Places Autocomplete</div>
            <div className="container">
                <div>
                    <TextField id="search-box" variant="outlined"/>
                    <Button variant="contained" onClick={() => handlePlaceSelect()}>Search</Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(GoogleAutocomplete);
