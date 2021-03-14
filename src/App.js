import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Header from './Com/Header/Header';
import Navbar from './Com/Navbar/Navbar';
import AsosiyOyna from './Com/AsosiyOyna/AsosiyOyna';
import Trendy from './Com/Trendy/Trendy';
import Podpiska from './Com/Podpiska/Podpiska';
import Tarix from './Com/Tarix/Istoriya';
const  App= ()=> {
  return (
    <div className="App">
       <Header/>
       <Navbar/>
       <div className='app-wrapper'>
         <Route path='/asosiy' render={AsosiyOyna}/>
         <Route path='/trendy' render={Trendy}/>
         <Route path='/podpiska' render={Podpiska}/>
         <Route path='/tarix' render={Tarix}/>
       </div>
    </div>
  );
}

export default App;
