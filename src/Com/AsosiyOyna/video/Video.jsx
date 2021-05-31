import React from 'react';
import s from './video.module.css';
import html from '../../../images/react.jpg';
import { NavLink } from 'react-router-dom';



const Video=(props)=>{
    return ( 
        <div className={s.video}>
            <div className={s.top}>
                <NavLink to={'watch/' + props.video.id} >
                    <img src={props.video.src ? props.video.src : html} />
                </NavLink>
            </div>
            <div className={s.bottom}>
                <div className={s.left}>
                    <img src={props.video.photo ? props.video.photo : html} />
                </div>
                <div className={s.right}>
                    <h3>{props.video.name}</h3>
                    <p>{props.video.status}</p>
                </div>
            </div>
        </div >
    )
}


export default Video;
//<NavLink to={`'/watch/'+${!props? props.video.id : null}`} />