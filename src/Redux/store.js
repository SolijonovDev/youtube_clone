import { combineReducers, createStore } from 'redux';
import videosReducer from './videos_reducer';

let reducers=combineReducers({
    videos:videosReducer
});

let store=createStore(reducers);

export default store;
