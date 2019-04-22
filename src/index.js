import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,connect } from 'react-dom';
import { createStore } from 'redux';
import { searchRobots } from './reducers/reducer';
import './index.css';
import App from './containers/App';
import 'tachyons';

import * as serviceWorker from './serviceWorker';

const store = createStore(searchRobots);

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
