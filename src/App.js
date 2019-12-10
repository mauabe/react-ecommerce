import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import Header from './components/Header.jsx';
import SignInAndSignUpPage from './sign-in-and-sign-up-page.jsx';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
