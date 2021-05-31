import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHezoWvUAv1IBWAr7jALM91x63IKipQfQSsQ&usqp=CAU" />
            </div>
            <div className={s.search}>
                <input className={s.srch} type='search' placeholder='qidirish' />
                <span className={s.img}>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdb4r8bEeGHv44ENLSTP1f8Rt3iY7cR3qgSQ&usqp=CAU" />
                </span>
            </div>
            <div className={s.profile}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tdzxQaG4wygq6XM-09Kx4x7aoDwb0GpQ2g&usqp=CAU" alt="" srcset="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSKaWTKHRQ-wTFPBS_kt8WGASXpkRZMLQKw&usqp=CAU" alt="" srcset="" />
            </div>
        </div>

    )
}
export default Header;