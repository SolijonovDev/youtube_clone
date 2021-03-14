import React from 'react';
import { connect } from 'react-redux';
import Videos from './video/Videos';

const mapStateToProps=(state)=>{
    debugger;
    return {
       videos:state.users.users
    }
}
const VideosContainer= connect(mapStateToProps,{})(Videos);
 export default  VideosContainer;