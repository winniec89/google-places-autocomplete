import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import index from './store';

import Layout from './layout';
import './index.css';

ReactDOM.render(
    <Provider store={index}>
        <Layout />
    </Provider>,
  document.getElementById('root')
);
