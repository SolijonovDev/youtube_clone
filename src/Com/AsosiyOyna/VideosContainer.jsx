import React from 'react';
import { connect } from 'react-redux';
import { setVideoPlay } from '../../Redux/videos_reducer';
import Video from './video/Video';
import s from './videos.module.css';



const VideosContainer=({videos})=>{
    let v=videos.map(el=><Video video={el}/>)
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



 export default  connect(maps)(VideosContainer);