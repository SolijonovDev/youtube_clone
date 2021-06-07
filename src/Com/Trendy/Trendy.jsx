import React from 'react';
import { connect } from 'react-redux';
import s from './trendy.module.css';
import Tvideo from './TrendyVideo/Tvideo';
import {trGetVideos} from './../../Redux/trendy_reducer';
import { NavLink } from 'react-router-dom';

class Trendy extends React.Component {
 componentDidMount(){
 this.props.trGetVideos();
 }
    render(){
    let video=this.props.videos.map(s=><Tvideo video={s}/>);
    return (
        <div className={s.trendy}> 
        <div className={s.ikonki}>
           <NavLink to="/trendy/sport" activeClassName={s.active}>
              Sport 
           </NavLink>
           <NavLink to="/trendy/musiqa" activeClassName={s.active}>
              Musiqa
           </NavLink>
           <NavLink to="/trendy/online-darslar" activeClassName={s.active}>
              Online darslar
           </NavLink>
           <NavLink to="/trendy/yangiliklar" activeClassName={s.active}>
              Yangiliklar
           </NavLink>
        </div>
        <div className={s.video}>
        {video}
        </div>
        </div>
    )
}
}
const mapStateToProps=(state)=>({
   videos:state.trendy.videos,

}
)



export default connect(mapStateToProps,{trGetVideos})(Trendy);