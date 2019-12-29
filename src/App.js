import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import {auth, createUserProfileDocument} from './firebase-utils';
import SignInAndSignUpPage from '../src/pages/SignInAndSignUpPage';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        // this.setState({currentUser: user})
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      } else {
        this.setState({currentUser: userAuth})
      }
    })
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/hats' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
