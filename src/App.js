import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUpPage from '../src/pages/SignInAndSignUpPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';

import {auth, createUserProfileDocument} from './firebase-utils';
import {setCurrentUser} from './redux/user/userActions';
import {selectCurrentUser} from './redux/user/userSelector';

import './App.css';

class App extends React.Component {
  // constructor(){
    //super();
    //this.state = {currentUser: null} }
    unsubscribeFromAuth = null;

    componentDidMount(){
      const {setCurrentUser} = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth)
    });
  }

  componentDidUpdate = (prevProps, prevState) => {
		// //LOGS CHANGES ON STATE AND PROPS
		Object.entries(this.props).forEach(([key, val]) =>
			prevProps[key] !== val && console.log('%c FILE LOCATION COMPONENT-DID-UPDATE prop:','color:dodgerblue; font-size: 1.2em;', `PROP '${key}' changed`, this.props)
		);
		if (this.state) {
			Object.entries(this.state).forEach(([key, val]) =>
				prevState[key] !== val && console.log('%c FILE LOCATION COMPONENT-DID-UPDATE state:','color:dodgerblue; font-size: 1.2em;', `STATE '${key}' changed`, this.state)
			);
		}
	}
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/hats' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ?
              ( <Redirect to='/' /> ) : ( <SignInAndSignUpPage /> )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
