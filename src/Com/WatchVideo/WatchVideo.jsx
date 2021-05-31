import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Recomenduetsya from './Recomenduetsya/Recomenduetsya';
import Watch from './Watch/Watch';
import s from './watchVideo.module.css';

const WatchVideo=({videos,video,setNav})=>{
    let vid=videos.map(el=><Recomenduetsya video={el}/>);
    setNav(false);
    return (
        <div className={s.watchVideo}>
            <div className={s.watch}>
            <Watch video={video}/>
            </div>
            <div className={s.rec}>
           {vid}
           </div>
        </div>
    )
}
const WithWatchVideo=withRouter(WatchVideo);

const mapS=(state)=>{
    return {
        videos:state.watch.videos,
        video:state.watch.video,
    }
}




export default connect(mapS)(WithWatchVideo);