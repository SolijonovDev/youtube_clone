import React from 'react';
import s from './video.module.css';
import html from '../../../images/react.jpg';
import { NavLink } from 'react-router-dom';



const Video=({video})=>{
    let v=video;
    return ( 
        <div className={s.video}>
            <div className={s.top}>
                <NavLink to={'watch/' + v.id} >
                    <img src={v.src || html} />
                </NavLink>
            </div>
            <div className={s.bottom}>
                <div className={s.left}>
                    <img src={v.photo || html} />
                </div>
                <div className={s.right}>
                    <h3>{v.name}</h3>
                    <p>{v.status}</p>
                </div>
            </div>
        </div >
    )
}


export default Video;