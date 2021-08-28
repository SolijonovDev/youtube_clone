import React, { useState } from 'react';
import Profile from '../Utilits/Profile/Profile';
import Subscribe from '../Utilits/Subscribe/Subscribe';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import s from './header.module.scss';

const Header = ({ setNav, nav }) => {
    let [profile, setProfile] = useState(false);
    let [subs, setSubs] = useState(false);

    return (
        <div className={s.header}>
            <div className={s.inner}>
                <div className={s.logos}>
                    <div className={s.menu} onClick={() => { setNav(!nav) }}>
                        <MenuIcon color='primary' />
                    </div>
                    <div className={s.logo}>
                        <YouTubeIcon color='error' fontSize='large' />
                        <span>Youtube</span>
                    </div>
                </div>
                <div className={s.search}>
                    <input className={s.srch} type='search' placeholder='qidirish' />
                    <span className={s.img}>
                        <SearchIcon color='primary' />
                    </span>
                </div>
                <div className={s.profile}>
                    <span onClick={() => setSubs(prev => !prev)}>
                        <NotificationsIcon color='error' fontSize='medium' />
                    </span>
                    <div className={subs ? s.subscribepage : s.subs}>
                        <Subscribe />
                    </div>
                    <span onClick={() => setProfile(prev => !prev)}>
                        <AccountCircleIcon color='primary' />
                    </span>
                    <div className={profile ? s.prof : s.profilepage}>
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;