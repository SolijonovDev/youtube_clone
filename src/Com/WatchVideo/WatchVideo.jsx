import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recomenduetsya from './Recomenduetsya/Recomenduetsya';
import Watch from './Watch/Watch';
import s from './watchVideo.module.scss';
import { watchVideoThunk, watchGetVideosThunk } from './../../Redux/actions/watch_videos_reducer';
import { useParams } from 'react-router-dom';

const WatchVideo = ({ setNav }) => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { videos, video } = useSelector(state => state.watch);

    useEffect(() => {
        dispatch(watchGetVideosThunk());
        dispatch(watchVideoThunk(id))
    }, [])



    useEffect(() => {
        dispatch(watchVideoThunk(id));
    }, [id])

    let vid = videos.map(el => <Recomenduetsya video={el} />);
    setNav(false);

    return (
        <div className={s.watchVideo}>
            <div className={s.watch}>
                <Watch video={video} />
            </div>
            <div className={s.rec}>
                {vid}
            </div>
        </div>
    )
}


export default WatchVideo;