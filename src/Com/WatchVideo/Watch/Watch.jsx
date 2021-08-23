import React, { useState, useEffect } from 'react'
import s from './watch.module.scss'

import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const Watch = ({ video: v }) => {
    let [like, setLike] = useState(false);
    let [layk, setLayk] = useState(1);
    let [dislike, setdislike] = useState(false);
    let [dislayk, setdislayk] = useState(1);

    useEffect(() => {
        setLayk(v.layk)
        setdislayk(v.dislayk)
        setLike(false)
        setdislike(false)
    }, [v.layk, v.dislayk])

    const handleLike = () => {
        if (dislike) {
            setdislayk(--dislayk);
            setdislike(false)
        }
        if (!like) {
            setLayk(++layk)
            setLike(true)
        }else{
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
        }else{
            setdislayk(--dislayk)
            setdislike(false)
        }
    }

    return (
        <div className={s.watch}>
            <div className={s.innner}>
                <div className={s.video}>
                    <img src={v.src} />
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
                            <img src={v.photochannel} />
                            <p>{v.channelName}</p>
                        </div>
                        <div className={s.subscribe}>
                            <p>Azo bo'lish</p>
                            <NotificationsNoneOutlinedIcon />
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