import React from 'react';
import s from './watch.module.css';
import viewsphoto from './../../../images/views.png';
import likephoto from './../../../images/like.png';
import dislikephoto from './../../../images/dislike.png';

const Watch = ({ video }) => {
    let v = video;
    return (
        <div className={s.watch}>
            <div className={s.innner}>
                <div className={s.video}>
                    <img src={v.src} />
                </div>
                <div className={s.info}>
                    <div className={s.views}>
                        <img src={viewsphoto} alt="glaz" />
                        <span>{v.views}</span>
                    </div>
                    <div className={s.status}>
                        <span>{v.status}</span>
                    </div>
                    <div className={s.ikonki}>
                        <span>
                            <img src={likephoto} alt="like" />
                            {v.layk}</span>
                        <span>
                            <img src={dislikephoto} alt="dislike" />
                            {v.dislayk}</span>
                    </div>
                </div>
                <div className={s.namechannel}>
                    <div className={s.channel}>
                        <div>
                            <img src={v.photochannel} />
                            <p>{v.channelName}</p>
                        </div>
                        <div className={s.logosubscribe}>
                            <p>Azo bo'lish</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEb1TtIekKbZ-Rv-Hqr3SNNwXNztf02IRSmQ&usqp=CAU" />
                        </div>
                    </div>
                    <div className={s.text}>
                    </div>
                </div>
                <hr />
                <div className={s.kommentari}>
                    kommentari
                    <div className={s.send}>
                    <textarea placeholder="matn kiriting...."></textarea>
                    <button>Qo'shish</button>
                    </div>
            </div>
                <hr />
            </div>
        </div>)
}
export default Watch;