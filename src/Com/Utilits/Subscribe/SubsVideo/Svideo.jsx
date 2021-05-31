import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './s.module.css';



const Svideo=({video})=>{
    return (
        <NavLink to={'/watch/'+video.id} className={s.inner}>
           <div className={s.img}>
               <img src={video.src} alt="" />
           </div>
           <div className={s.text}>
                <h3>{video.status}</h3>
                <h5>{video.name}</h5>
           </div>
        </NavLink>
    )
}

export default Svideo;