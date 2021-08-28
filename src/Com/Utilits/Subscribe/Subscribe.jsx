import React from 'react';
import { useSelector } from 'react-redux';
import s from './s.module.scss';
import Svideo from './SubsVideo/Svideo';

const Subscribe=()=>{
 const {videos}=useSelector(state=>state.subs)

    const subs=videos.map(e=><Svideo video={e}/>);
    return (
        <div className={s.subs}>
            <h2>Yangiliklar</h2>
           {subs}
        </div>
    )
}


export default Subscribe;