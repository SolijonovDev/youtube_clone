import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.scss';

import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

const Navbar = ({ nav }) => {
    console.log("Navbar");
    return (
        <div className={nav ? s.items : s.it} >
            <div className={s.item} >
                <NavLink to='/videos' activeClassName={s.activ}>
                    <HomeIcon />
                    <span>Asosiy</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/trendy' activeClassName={s.activ}>
                    <ExploreIcon />
                    <span>Trendda</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/podpiska' activeClassName={s.activ}>
                    <SubscriptionsIcon />
                    <span> Podpiska</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/tarix' activeClassName={s.activ}>
                    <HistoryIcon />
                    <span>Tarix</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/library' activeClassName={s.activ}>
                    <VideoLibraryIcon />
                    <span>Kutubxona</span>
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar;