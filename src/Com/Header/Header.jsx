import React from 'react';
import s from './header.module.css';
import logo from './../../images/youtube.png';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src={logo}/>
            </div>
            
            <div className={s.search}>
                <input type='search' placeholder='qidirish' />
                <input type='button' value='Ok'/>
            </div>
            
            <div className={s.profile}>
                Profile
            </div>


        </div>

    )
}
export default Header;