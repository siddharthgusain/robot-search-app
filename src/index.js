import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { searchRobots } from './reducers/reducer';
import { createLogger } from 'redux-logger';
import './index.css';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import 'tachyons';

import * as serviceWorker from './serviceWorker';
const logger = createLogger();
const store = createStore(searchRobots,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,document.getElementById('root'));

serviceWorker.unregister();
