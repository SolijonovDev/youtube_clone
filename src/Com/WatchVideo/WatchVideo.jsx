import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Recomenduetsya from './Recomenduetsya/Recomenduetsya';
import Watch from './Watch/Watch';
import s from './watchVideo.module.css';
import {watchVideoThunk,watchGetVideosThunk} from './../../Redux/watch_videos_reducer';
import { compose } from 'redux';

class WatchVideo extends React.Component{
    componentDidMount(){
    this.props.watchVideoThunk(this.props.match.params.videoId);
    this.props.watchGetVideosThunk();
    }
    
    componentDidUpdate(){
        this.props.watchVideoThunk(this.props.match.params.videoId);
    }
    render(){
    let vid=this.props.videos.map(el=><Recomenduetsya video={el}/>);
     this.props.setNav(false);
    return (
        <div className={s.watchVideo}>
            <div className={s.watch}>
            <Watch video={this.props.video}/>
            </div>
            <div className={s.rec}>
           {vid}
           </div>
        </div>
    )
}
}
const WithWatchVideo=withRouter(WatchVideo);

const mapS=(state)=>{
    return {
        videos:state.watch.videos,
        video:state.watch.video,
    }
}
const mapD={
    watchVideoThunk,
    watchGetVideosThunk
}



export default  compose(withRouter,
connect(mapS,mapD))(WithWatchVideo);