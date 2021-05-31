import React from 'react';
import { connect } from 'react-redux';
import s from './trendy.module.css';
import Tvideo from './TrendyVideo/Tvideo';

const Trendy = (props) => {
    let videos=props.videos.map(s=><Tvideo video={s}/>);
    return (
        <div className={s.trendy}> 
           {videos}
        </div>
    )
}
const mapStateToProps=(state)=>({
   videos:state.trendy.videos,

}
)
const mapDispatchToProps={
}


export default connect(mapStateToProps,mapDispatchToProps)(Trendy);