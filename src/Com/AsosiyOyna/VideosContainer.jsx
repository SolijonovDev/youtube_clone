import React from 'react';
import { connect } from 'react-redux';
import { setVideoPlay } from '../../Redux/videos_reducer';
import Video from './video/Video';
import s from './videos.module.css';



const VideosContainer=(props)=>{
    let v=props.videos.map(el=><Video video={el} setVideoPlay={props.setVideoPlay}/>)
    return (
        <div className={s.videos}>
       {v}
        </div>
    )
}
const maps=(state)=>{
    return {
        videos:state.videos.videos
    }
}



 export default  connect(maps,{setVideoPlay})(VideosContainer);