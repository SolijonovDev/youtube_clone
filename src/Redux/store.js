import { combineReducers, createStore } from 'redux';
import podpiskaReducer from './podpischiki_reducer';
import trendyReducer from './trendy_reducer';
import videosReducer from './videos_reducer';

let reducers = combineReducers({
    videos: videosReducer,
    trendy: trendyReducer,
    podpischiki: podpiskaReducer
});

let store = createStore(reducers);

export default store;
