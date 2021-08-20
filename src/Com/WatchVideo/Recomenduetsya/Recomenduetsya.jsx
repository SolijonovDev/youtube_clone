import React from 'react';
import s from './recomenduetsya.module.css';
import photo from './../../../images/html.jpg';
import { Link } from 'react-router-dom';

const Recomenduetsya = ({video:v}) => {

return <div className={s.recomenduetsya}>
        <Link to={'/watch/'+v.id} className={s.inner}>
            <div className={s.image}>
                <img src={v.src||photo} alt="photo" />
            </div>
            <div className={s.text}>
                <h3>{v.status}</h3>
                <h5>{v.channelName}</h5>
            </div>
        </Link>
    </div>
}

export default Recomenduetsya;