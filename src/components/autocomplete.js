import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { search_location } from "../actions";

const GoogleAutocomplete = (props) => {
    const { dispatch } = props;
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
        dispatch(search_location({
            address: formattedAddress,
            coordinates
        }));
    };

    return (
        <div className="google-autocomplete" >
            <header>
                <div>
                    <input id='search-box' />
                    <button onClick={() => handlePlaceSelect()} type="button">Search</button>
                </div>
            </header>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(GoogleAutocomplete);
