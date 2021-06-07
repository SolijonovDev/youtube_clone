import React from 'react';
import { connect } from 'react-redux';
import s from './podpiska.module.css';
import Pvideo from './Pvideo/Pvideo';
import {psGetVideoThunk} from './../../Redux/podpischiki_reducer';

class Podpiska extends React.Component{
 componentDidMount(){
 this.props.psGetVideoThunk();
 }
    render(){
    let video=this.props.videos.map(s=><Pvideo video={s}/>);
    return (
        <div className={s.podpiska}>
            {video}
        </div>
    )
}
}
const mapStateToProps=(state)=>({
    videos:state.podpischiki.videos,

})

export default connect(mapStateToProps,{psGetVideoThunk})(Podpiska);