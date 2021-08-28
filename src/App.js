import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

import { Header, Navbar, Podpiska, Tarix, Trendy, Videos, WatchVideo } from './Com';


const App = () => {
  let [nav, setNav] = useState(true);
  return (
      <div className={nav ? "app" : "ap"}>
        <Header setNav={setNav} nav={nav} />
        <Navbar nav={nav} />
        <div className='app-wrapper'>
          <Switch>
            {/* <Route exact path='/videos' render={() => <Videos />} />
            <Route exact path='/trendy' render={() => <Trendy />} />
            <Route exact path='/podpiska' render={() => <Podpiska />} />
            <Route exact path='/tarix' render={() => <Tarix />} />
            <Route exact path='/watch/:id?' render={() => <WatchVideo setNav={setNav} />} /> */}
            <Redirect to='/videos' />
          </Switch>
        </div>
      </div>
  );
}

export default App;
