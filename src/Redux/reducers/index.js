import podpiska from './podpischiki_reducer'
import subs from './subs_reducer'
import trendy from './trendy_reducer'
import videos from './videos_reducer'
import watch from './watch_videos_reducer'

import { combineReducers } from 'redux';

export const reducers = combineReducers({
    videos,
    trendy,
    podpiska,
    watch,
    subs
});
