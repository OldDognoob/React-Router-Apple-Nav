import React from 'react';
import { Route, Switch, NavLink} from 'react-router-dom';

// import {Home, IPad, IPhone, Mac, Music, Support, TV, UpNav} from './Components';

import UpNav from './components/UpNav'
import Home from './components/Home'
import Mac from './components/Mac'
import IPad from './components/IPad'
import IPhone from './components/IPhone'
import TV from './components/TV'
import Music from './components/Music'
import Support from './Components/Support'

import './App.css';

const App = () => {
  return (
    <div>
    <UpNav />
    <Switch>
      <Route exact path="/home">
      <Home/>
      </Route>
      <Route exact path="/ipad">
      <IPad/>
      </Route>
      <Route exact path="/iphone">
      <IPhone/>
      </Route>
      <Route exact path="/mac">
      <Mac/>
      </Route>
     <Route exact path="/music">
     <Music/>
     </Route>
     <Route exact path="/tv">
     <TV />
     </Route>
     <Route exact path="/support">
     <Support/>
     </Route>
    </Switch>
  </div>



  )
  
};

export default App;