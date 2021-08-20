import React from 'react';
import { useSelector } from 'react-redux';
import Search from './Search';
import s from './tarix.module.css';
import Tarixv from './TarixV';

const Tarix = () => {
    const {videos}=useSelector(state=>state.trendy);

    let video=videos.map(s=><Tarixv video={s}/>);
    return (
        <div className={s.tarix}> 
           <div className={s.inner}>
               <div className={s.videos}>
               {video}
               </div>
               <div className={s.search}>
                 <Search/>
               </div>
           </div>
        </div>
    )
}



export default Tarix;