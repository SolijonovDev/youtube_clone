import React from 'react';
import { connect } from 'react-redux';
import s from './s.module.css';
import Svideo from './SubsVideo/Svideo';

const Subscribe=({videos})=>{
    const subs=videos.map(e=><Svideo video={e}/>);
    return (
        <div className={s.subs}>
            <h2>Yangiliklar</h2>
           {subs}
        </div>
    )
}

const mapStateToProps=(state)=>({
    videos:state.subs.videos,
})

export default connect(mapStateToProps)(Subscribe);