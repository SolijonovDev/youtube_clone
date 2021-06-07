import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import podpiskaReducer from './podpischiki_reducer';
import subsReducer from './subs_reducer';
import trendyReducer from './trendy_reducer';
import videosReducer from './videos_reducer';
import watchVideosReducer from './watch_videos_reducer';

let reducers = combineReducers({
    videos: videosReducer,
    trendy: trendyReducer,
    podpischiki: podpiskaReducer,
    watch:watchVideosReducer,
    subs:subsReducer
});

let store = createStore(reducers,applyMiddleware(thunk));

export default store;
