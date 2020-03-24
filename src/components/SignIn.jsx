import React from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import {auth, signInWithGoogle} from '../firebase-utils'
import '../scss/sing-in.scss';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error){
      console.error('something went wrong', error)
    }
    // this.setState({email: '', password: ''})
  }

  handleChange = event =>   {
    const {value, name} = event.target;
    this.setState( {[name]: value})
  }

  render(){
    // eslint-disable-next-line
    const mikeUser = {
      displayName: 'Mike',
      email: 'mike@gmail.com',
      password: 'Nhy8@EqemBRhK2w'
    }
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required />
          <div className='buttons'>
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }

}

export default SignIn;