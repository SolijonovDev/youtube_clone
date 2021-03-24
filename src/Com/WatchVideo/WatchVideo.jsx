import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Recomenduetsya from './Recomenduetsya/Recomenduetsya';
import Watch from './Watch/Watch';
import s from './watchVideo.module.css';

const WatchVideo=(props)=>{
    let vid=props.videos.map(el=><Recomenduetsya video={el}/>)
       
    return (
        <div className={s.watchVideo}>
            <div className={s.watch}>
            <h2>Hello world</h2>
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
        videos:state.videos.videos
    }
}




export default connect(mapS)(WithWatchVideo);