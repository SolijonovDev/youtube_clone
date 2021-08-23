import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './podpiska.module.css';
import Pvideo from './Pvideo';
import {psGetVideoThunk} from './../../Redux/actions/podpischiki_reducer';

const Podpiska=()=>{
    const dispatch=useDispatch();
    const {videos}=useSelector(state=>state.podpiska);
    
    useEffect(()=>{
     dispatch(psGetVideoThunk());
    },[])
 
    let video=videos.map(s=><Pvideo video={s}/>);
    return (
        <div className={s.podpiska}>
            {video}
        </div>
    )
}


export default Podpiska;