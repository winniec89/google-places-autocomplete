import React from 'react';

import GoogleAutocomplete from '../components/autocomplete';
import Map from '../components/map';
import SearchHistory from '../components/history';

const Layout = () => {
    return <div>
        <GoogleAutocomplete />
        <Map />
        <SearchHistory />
    </div>
}

export default Layout;
