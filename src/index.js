import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { searchRobots,requestRobots } from './reducers/reducer';
import { createLogger } from 'redux-logger';
import './index.css';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import 'tachyons';

import * as serviceWorker from './serviceWorker';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,document.getElementById('root'));

serviceWorker.unregister();
