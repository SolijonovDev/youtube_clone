import React from 'react';
import s from './trendyv.module.css';
import photo from './../../../images/javascript.png';
import { Link } from 'react-router-dom';

const Tvideo=({video:v})=>{
    return (
        <div className={s.video}>
         <Link to={'watch/'+v.id} className={s.inner}>
          <div className={s.img}>
              <img src={v.src||photo} alt="trendy photo" />
          </div>
          <div className={s.text}>
              <h2>{v.name}</h2>
              <p>{v.status}</p>
          </div>
         </Link>
        </div>
    )
}

export default Tvideo;