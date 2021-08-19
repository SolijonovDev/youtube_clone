import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';


let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;
