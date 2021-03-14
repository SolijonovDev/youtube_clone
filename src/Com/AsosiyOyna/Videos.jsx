import React from 'react';
import { connect } from 'react-redux';
import { setVideos } from '../../Redux/video_reducer';
import Video from './video/Video';
import s from './videos.module.css';



const Videos=(props)=>{
    const obyekts=[
        {
            id: 1,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 2,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
        {
            id: 3,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 4,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
        {
            id: 3,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 4,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
        {
            id: 3,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 4,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
        {
            id: 3,
            photo:'',
            src: '',
            name: 'Vladilen Minen',
            status: 'html za 1 chas',
        },
        {
            id: 4,
            photo:'',
            src: '',
            name: 'Xaudi xo',
            status: 'css za 1 chas',
        },
    ]
     if(props.videos.length==0){
         props.set(obyekts);
     }
    
    let v=props.videos.map(el=><Video video={el}/>)
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
const mapd=(dispatch)=>{
    return {
        set:(v)=>dispatch(setVideos(v))
    }
}

const VideosContainer=connect(maps,mapd)(Videos)
 export default  VideosContainer;