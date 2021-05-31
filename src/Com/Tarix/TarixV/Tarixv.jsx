import React from 'react';
import s from './tarixv.module.css';
import photo from './../../../images/javascript.png';
import { NavLink } from 'react-router-dom';

const Tarixv=(props)=>{
    let v=props.video;
    return (
        <div className={s.video}>
         <NavLink to={'watch/'+v.id} className={s.inner}>
          <div className={s.img}>
              <img src={v.src||photo} alt="trendy photo" />
          </div>
          <div className={s.text}>
              <h2>{v.name}</h2>
              <p>{v.status}</p>
          </div>
         </NavLink>
        </div>
    )
}

export default Tarixv;