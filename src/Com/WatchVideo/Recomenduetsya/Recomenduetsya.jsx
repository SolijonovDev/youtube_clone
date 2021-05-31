import React from 'react';
import s from './recomenduetsya.module.css';


const Recomenduetsya=(props)=>{
    return <div className={s.recom}>
        <p>{props.video.id}</p>
        <p>{props.video.status}</p>
        <h3>{props.video.name}</h3>
        <p>{props.video.status}</p>
    </div>
}

export default Recomenduetsya;