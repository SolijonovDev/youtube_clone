import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';

const Navbar=(props)=>{
    return (
        <div className={s.items}>
            <div className={s.item} >
                <NavLink to='/asosiy' activeClassName={s.activ}>Asosiy</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/trendy' activeClassName={s.activ}>Trendda</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/podpiska' activeClassName={s.activ}>Podpiska</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/tarix' activeClassName={s.activ}>Tarix</NavLink>
            </div>
        </div>
    )
}
 export default Navbar;