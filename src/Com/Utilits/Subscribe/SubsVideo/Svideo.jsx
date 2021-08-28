import React from 'react';
import { Link } from 'react-router-dom';
import s from './s.module.scss';



const Svideo=({video})=>{
    return (
        <Link to={'/watch/'+video.id} className={s.inner}>
           <div className={s.img}>
               <img src={video.photo} alt="" />
           </div>
           <div className={s.text}>
                <h3>{video.status}</h3>
                <h5>{video.name}</h5>
           </div>
        </Link>
    )
}

export default Svideo;