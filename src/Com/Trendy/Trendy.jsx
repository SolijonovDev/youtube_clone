import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './trendy.module.css';
import Tvideo from './TrendyVideo/Tvideo';
import { trGetVideos } from './../../Redux/actions/trendy_reducer';
import { Link } from 'react-router-dom';

const Trendy = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(trGetVideos())
   }, [])
   const { videos } = useSelector(state => state.trendy)

   let video = this.props.videos.map(s => <Tvideo video={s} />);
   return (
      <div className={s.trendy}>
         <div className={s.ikonki}>
            <Link to="/trendy/sport" activeClassName={s.active}>
               Sport
            </Link>
            <Link to="/trendy/musiqa" activeClassName={s.active}>
               Musiqa
            </Link>
            <Link to="/trendy/online-darslar" activeClassName={s.active}>
               Online darslar
            </Link>
            <Link to="/trendy/yangiliklar" activeClassName={s.active}>
               Yangiliklar
            </Link>
         </div>
         <div className={s.video}>
            {video}
         </div>
      </div>
   )
}



export default Trendy;