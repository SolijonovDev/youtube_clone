import React from 'react';
import s from './p.module.scss';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.inner}>
                <div className={s.top}>
                    <div className={s.image}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSKaWTKHRQ-wTFPBS_kt8WGASXpkRZMLQKw&usqp=CAU" alt="" />
                    </div>
                    <div className={s.name}>
                        Solijonov Qodirjon
                    </div>
                </div>
                <div className={s.text}>
                    <p><span>Tel : </span>+998 99 845 61 98</p>
                    <p><span>Kasbi : </span>Frontend Developer</p>
                    <p><span>yoshi : </span> 23</p>
                </div>
            </div>
        </div>
    )
}


export default Profile;