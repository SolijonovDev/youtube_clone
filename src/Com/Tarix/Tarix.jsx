import React from 'react'
import { useSelector } from 'react-redux'
import Search from './Search'
import s from './tarix.module.scss'
import Tarixv from './TarixV'

const Tarix = () => {

    const { videos } = useSelector(state => state.trendy);

    let video = videos.map(s => <Tarixv video={s} />);
    return (
        <div className={s.tarix}>
            <div className={s.inner}>
                <div className={s.videos}>
                    <div className={s.title}>
                        <h2>Ko'rilganlar tarixi</h2>
                        <h2>Bugungilar</h2>
                    </div>
                    {video}
                </div>
                <div className={s.search}>
                    <Search />
                </div>
            </div>
        </div>
    )
}



export default Tarix;