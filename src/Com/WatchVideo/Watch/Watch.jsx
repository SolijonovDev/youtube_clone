import React, { useState, useEffect } from 'react'
import s from './watch.module.scss'

import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';

const Watch = ({ video: v }) => {
    let [like, setLike] = useState(false);
    let [layk, setLayk] = useState(1);
    let [dislike, setdislike] = useState(false);
    let [dislayk, setdislayk] = useState(1);
    let [subs, setSubs] = useState(false);
    let [drop, setDrop] = useState(false);
    const st=NotificationsActiveIcon;
    let [active, setActive] = useState(0);
    let arr=[NotificationsActiveIcon,NotificationsNoneOutlinedIcon,NotificationsOffIcon]

    useEffect(() => {
        setLayk(v.layk)
        setdislayk(v.dislayk)
        setLike(false)
        setdislike(false)
         setSubs(false);
       setDrop(false);
    }, [v.layk, v.dislayk])
    const handleClick=(id)=>{
        setActive(1)
       setDrop(false);
      
    }
    const handleSubs = () => {
        setSubs(!subs)
    }
    const handleDrop=()=>{
        console.log('drop click');
        setDrop(!drop);
    }
    const handleLike = () => {
        if (dislike) {
            setdislayk(--dislayk);
            setdislike(false)
        }
        if (!like) {
            setLayk(++layk)
            setLike(true)
        } else {
            setLayk(--layk)
            setLike(false)
        }
    }
    const handleDislike = () => {
        if (like) {
            setLayk(--layk)
            setLike(false)
        }
        if (!dislike) {
            setdislayk(++dislayk)
            setdislike(true)
        } else {
            setdislayk(--dislayk)
            setdislike(false)
        }
    }

    return (
        <div className={s.watch}>
            <div className={s.innner}>
                <div className={s.video}>
                    <img src={v.src} alt='photovideo' />
                </div>
                <div className={s.info}>
                    <div className={s.status}>
                        <span>{v.status}</span>
                    </div>
                    <div className={s.bottom}>
                        <div className={s.views}>
                            <VisibilityIcon />
                            <span>{v.views}</span>
                        </div>
                        <div className={s.ikonki}>
                            <span onClick={handleLike}>
                                {like ?
                                    <ThumbUpIcon color='primary' /> : <ThumbUpAltOutlinedIcon />
                                }
                                {layk}</span>
                            <span onClick={handleDislike}>
                                {
                                    dislike ? <ThumbDownIcon color='primary' /> : <ThumbDownAltOutlinedIcon />
                                }
                                {dislayk}</span>
                        </div>
                    </div>
                </div>
                <div className={s.namechannel}>
                    <div className={s.channel}>
                        <div>
                            <img src={v.photochannel} alt='photochannel' />
                            <p>{v.channelName}</p>
                        </div>
                        <div className={s.subscribe}>
                            <button className={!subs? s.subs :null} onClick={handleSubs}>{subs ? "Bekor qilish":"Obuna bo'lish"}</button>
                            {subs ? <div onClick={handleDrop}>
                                <NotificationsNoneOutlinedIcon />
                            </div>:null}
                              {drop ?  <div className={s.dropdown}>
                                    <span onClick={handleClick}>
                                        <NotificationsActiveIcon /> Hammasi
                                    </span >
                                    <span onClick={handleClick}>
                                        <NotificationsNoneOutlinedIcon /> Saralangani
                                    </span>
                                    <span onClick={handleClick}>
                                        <NotificationsOffIcon /> Hech qanday
                                    </span>
                                </div>:null
}
                        </div>
                    </div>
                    <div className={s.text}>
                    </div>
                </div>
                <div className={s.kommentari}>
                    <h2>Kommentari</h2>
                    <div className={s.send}>
                        <textarea placeholder="Matn kiriting...."></textarea>
                        <button>Qo'shish</button>
                    </div>
                </div>
            </div>
        </div>)
}
export default Watch;