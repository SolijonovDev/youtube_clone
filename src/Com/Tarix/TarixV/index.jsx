import React from 'react';
import s from './tarixv.module.scss';
import photo from './../../../images/javascript.png';
import { NavLink } from 'react-router-dom';

const Tarixv=({video:v})=>{
    return (
        <div className={s.video}>
         <NavLink to={'watch/'+v.id} className={s.inner}>
              <img src={v.src||photo} alt="trendy photo" />
          <div className={s.text}>
              <h2>{v.status}</h2>
              <h5>{v.channelName}</h5>
          </div>
         </NavLink>
        </div>
    )
}

export default Tarixv;