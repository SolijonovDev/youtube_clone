import React from 'react';
import s from './pvideo.module.css';
import photo from './../../../images/mern.jpg';
import { Link } from 'react-router-dom';

const Pvideo = ({video}) => {
    let v=video;
    return (
        <div className={s.video}>
            <Link to={'/watch/'+v.id} className={s.inner}>
                <div className={s.img}>
                   <img src={v.src||photo} alt="photo" />
                </div>
                <div className={s.text}>
                   <h2>{v.name}</h2>
                   <p>{v.status}</p>
                </div>
            </Link>
        </div>
    )
}

export default Pvideo;