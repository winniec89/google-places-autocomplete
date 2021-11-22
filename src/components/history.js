import React from 'react';
import { useSelector } from "react-redux";

import './scss/history.scss';

const SearchHistory = () => {
    const history = useSelector((state) => state.history);

    return <div className="history">
        Search History:
        <ul>
            {
                history.map((location, index) => {
                    return <li key={index}>{location}</li>
                })
            }
        </ul>
    </div>
}

export default SearchHistory;
