import React from 'react';
import { connect } from 'react-redux';
import Search from './Search/Search';
import s from './tarix.module.css';
import Tarixv from './TarixV/Tarixv';

const Tarix = (props) => {
    let videos=props.videos.map(s=><Tarixv video={s}/>);
    return (
        <div className={s.tarix}> 
           <div className={s.inner}>
               <div className={s.videos}>
               {videos}
               </div>
               <div className={s.search}>
                 <Search/>
               </div>
           </div>
        </div>
    )
}
const mapStateToProps=(state)=>({
   videos:state.trendy.videos,

}
)
const mapDispatchToProps={
}


export default connect(mapStateToProps,mapDispatchToProps)(Tarix);