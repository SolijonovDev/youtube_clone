import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './trendy.module.scss';
import Tvideo from './Video';
import { trGetVideos } from './../../Redux/actions/trendy_reducer';
import { Link } from 'react-router-dom';

const Trendy = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(trGetVideos())
   }, [])

   const arr=[{
      id:1,link:'/trendy/sport',name:'Sport'},
      {id:2,link:'/trendy/musiqa',name:"Musiqa"},
      {id:2,link:'/trendy/online-darslar',name:"Online darslar"},
      {id:2,link:'/trendy/yangiliklar',name:"Yangiliklar"}
   ]
   const { videos } = useSelector(state => state.trendy)

   let video = videos.map(s => <Tvideo video={s} />);
   return (
      <div className={s.trendy}>
         <div className={s.ikonki}>
            {arr.map(s=><Link to={s.link} activeClassName={s.active}>{s.name}</Link>
            )}
         </div>
         <div className={s.video}>
            {video}
         </div>
      </div>
   )
}



export default Trendy;