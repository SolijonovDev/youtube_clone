import React from 'react';
import { connect } from 'react-redux';
import s from './video.module.css';
import html from '../../../images/react.jpg';

const Video=(props)=>{
    debugger;
    return (
        <div className={s.video}>
            <div className={s.top}>
                <img src={props.video.src? props.video.src : html} />
            </div>
             <div className={s.bottom}>
               <div className={s.left}>
                   <img src={props.video.photo? props.video.photo :html }/>
               </div>
               <div className={s.right}>
                   <h3>{props.video.name}</h3>
               <p>{props.video.status}</p>
               </div>
             </div>
           
        </div>
    )
}


export default Video;