import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Video from './video/Video';
import s from './videos.module.css';
import {videosThunk} from '../../Redux/actions/videos_reducer';



const  Videos=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(videosThunk());
    },[])
    
    const {videos}=useSelector(state=>state.videos);

    let v=videos.map(el=><Video video={el}/>)
    return (
        <div className={s.videos}>
       {v}
        </div>
    )
}

 export default  Videos;