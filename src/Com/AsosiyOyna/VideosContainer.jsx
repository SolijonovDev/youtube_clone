import React from 'react';
import { connect } from 'react-redux';
import Video from './video/Video';
import s from './videos.module.css';
import {videosThunk} from './../../Redux/videos_reducer';



class VideosContainer extends React.Component{
   componentDidMount(){
       this.props.videosThunk();
   }
    render(){
    let v=this.props.videos.map(el=><Video video={el}/>)
    return (
        <div className={s.videos}>
       {v}
        </div>
    )
}
}
const maps=(state)=>{
    return {
        videos:state.videos.videos
    }
}



 export default  connect(maps,{videosThunk})(VideosContainer);