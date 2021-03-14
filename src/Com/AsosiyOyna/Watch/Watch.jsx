import React from 'react';
import Video from '../video/Video';
import Recomen from './Recomendatsiya/Recomen';
import s from './watch.module.css';

const Watch=(props)=>{
    return (
        <div className={s.watch}>
          <Video/>
          <Recomen/>
        </div>
    )
}

export default Watch;