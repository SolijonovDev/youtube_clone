import React from 'react';
import s from './video.module.scss';
import html from '../../../images/react.jpg';
import { Link } from 'react-router-dom';



const Video=({video:v})=>{
    return ( 
        <div className={s.video}>
            <div className={s.top}>
                <Link to={'watch/' + v.id} >
                    <img src={v.src || html} />
                </Link>
            </div>
            <div className={s.bottom}>
                <div className={s.left}>
                    <img src={v.photochannel || html} />
                </div>
                <div className={s.right}>
                    <p>{v.status}</p>
                    <h3>{v.channelName}</h3>
                </div>
            </div>
        </div >
    )
}


export default Video;