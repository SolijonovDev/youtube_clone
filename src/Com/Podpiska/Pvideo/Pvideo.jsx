import React from 'react';
import s from './pvideo.module.css';
import photo from './../../../images/mern.jpg';
import { NavLink } from 'react-router-dom';

const Pvideo = (props) => {
    let v=props.video;
    return (
        <div className={s.video}>
            <NavLink to={'/watch/'+v.id} className={s.inner}>
                <div className={s.img}>
                   <img src={v.src||photo} alt="photo" />
                </div>
                <div className={s.text}>
                   <h2>{v.name}</h2>
                   <p>{v.status}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default Pvideo;