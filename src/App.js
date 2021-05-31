import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './Com/Header/Header';
import Navbar from './Com/Navbar/Navbar';
import Trendy from './Com/Trendy/Trendy';
import Podpiska from './Com/Podpiska/Podpiska';
import Tarix from './Com/Tarix/Tarix';
import WatchVideo from './Com/WatchVideo/WatchVideo';
import VideosContainer from './Com/AsosiyOyna/VideosContainer';

const App=()=>{

  let [nav,setNav]=useState(true);
  return (
    <div className={nav?"App":"Ap"}>
       <Header setNav={setNav} nav={nav}/>
       <Navbar nav={nav}/>
       <div className='app-wrapper'>
         <Switch>
         <Route path='/videos' render={()=><VideosContainer/>}/>
         <Route path='/trendy' render={()=><Trendy/>}/>
         <Route path='/podpiska' render={()=><Podpiska />}/>
         <Route path='/tarix' render={()=><Tarix />}/>
         <Route path='/watch/:videoId?' render={()=><WatchVideo setNav={setNav}/> }/>
         <Route path='/' render={()=><VideosContainer/>}/>
         </Switch>
       </div>
    </div>
  );
}

export default App;
