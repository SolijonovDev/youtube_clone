import { combineReducers, createStore } from 'redux';
import videoReducer from './video_reducer';

let reducers=combineReducers({
    videos:videoReducer
});

let store=createStore(reducers);

export default store;
