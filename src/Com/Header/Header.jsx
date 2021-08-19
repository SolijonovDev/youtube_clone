import React, { useState } from 'react';
import Profile from '../Utilits/Profile/Profile';
import Subscribe from '../Utilits/Subscribe/Subscribe';
import { FaYoutube } from "react-icons/fa";
import s from './header.module.css';

const Header = ({ setNav, nav }) => {
    let [profile, setProfile] = useState(false);
    let [subs, setSubs] = useState(false);
    return (
        <div className={s.header}>
            <div className={s.logos}>
                <div className={s.menu} onClick={() => { setNav(!nav) }}>
                    <button className={s.btn}></button>
                </div>
                <div>
                    <FaYoutube/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHezoWvUAv1IBWAr7jALM91x63IKipQfQSsQ&usqp=CAU" alt='logo'/>
                </div>
            </div>
            <div className={s.search}>
                <input className={s.srch} type='search' placeholder='qidirish' />
                <span className={s.img}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdb4r8bEeGHv44ENLSTP1f8Rt3iY7cR3qgSQ&usqp=CAU" />
                </span>
            </div>
            <div className={s.profile}>
                <div className={profile ? s.prof : s.profilepage}>
                    <Profile />
                </div>
                <img onClick={() => { setSubs(!subs) }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tdzxQaG4wygq6XM-09Kx4x7aoDwb0GpQ2g&usqp=CAU" alt="" srcset="" />
                <div className={subs ? s.subscribepage : s.subs}>
                    <Subscribe />
                </div>
                <img onClick={() => { setProfile(!profile) }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSKaWTKHRQ-wTFPBS_kt8WGASXpkRZMLQKw&usqp=CAU" alt="" srcset="" />
            </div>
        </div>

    )
}
export default Header;