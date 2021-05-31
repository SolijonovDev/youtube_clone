import React from 'react';
import s from './watch.module.css';

const Watch=(props)=>{    
    return <div className={s.watch}>
        <p>{props.video.id}</p>
    </div>
}
export default Watch;