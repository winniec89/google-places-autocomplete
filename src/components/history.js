import React from 'react';
import { useSelector, connect } from "react-redux";
import { search_history } from '../actions'

const SearchHistory = () => {
    const history = useSelector((state) => state.history);

    return <div>
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

const mapStateToProps = (state) => {
    return { state };
}

export default connect(mapStateToProps, { search_history })(SearchHistory);
