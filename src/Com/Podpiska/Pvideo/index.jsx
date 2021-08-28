import React from 'react';
import s from './pvideo.module.scss';
import photo from './../../../images/mern.jpg';
import { Link } from 'react-router-dom';

const Pvideo = ({video:v}) => {
    console.log('Podpiska item');
    return (
        <div className={s.video}>
            <Link to={'/watch/'+v.id} className={s.inner}>
                
                   <img src={v.src||photo} alt="photo" />
        
                <div className={s.text}>
                   <p>{v.status}</p>
                   <h2>{v.channelName}</h2>
                </div>
            </Link>
        </div>
    )
}

export default Pvideo;