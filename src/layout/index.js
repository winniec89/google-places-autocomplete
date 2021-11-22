import React from 'react';

import GoogleAutocomplete from '../components/autocomplete';
import Map from '../components/map';
import SearchHistory from '../components/history';

import './index.scss';

const Layout = () => {
    return <div className="layout">
        <GoogleAutocomplete />
        <Map />
        <SearchHistory />
    </div>
}

export default Layout;
