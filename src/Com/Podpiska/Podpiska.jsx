import React from 'react';
import { connect } from 'react-redux';
import s from './podpiska.module.css';
import Pvideo from './Pvideo/Pvideo';

const Podpiska =(props)=>{
    let video=props.videos.map(s=><Pvideo video={s}/>);
    return (
        <div className={s.podpiska}>
            {video}
        </div>
    )
}
const mapStateToProps=(state)=>({
    videos:state.podpischiki.videos,

})

export default connect(mapStateToProps)(Podpiska);