import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import Header from './components/Header.jsx';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
