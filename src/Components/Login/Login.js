import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import googleIcon from '../../images/google.svg';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
    navigate(from, { replace: true });
  };

  const nagivate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = event => {
    setEmail(event.target.value);
  }
  const handlePassword = event => {
    setPassword(event.target.value);
  } 

  const loginForm = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className='login_page'>

      <div className="login_form">
        <h3>Login</h3>
        <form onSubmit={loginForm}>
          <label>Email</label><br />
          <input onChange={handleEmail} required type="email" /><br />
          <label>Password</label><br />
          <input onChange={handlePassword} required type="password" /><br />
          <span className='error_message'>{error?.message}</span><br />
          <button className='login_btn'>{
            loading ? 'Loading...' : 'Login'
          }</button><br />
          <span>New to Ema-john? <Link to='/register'>Create New Account</Link></span>
          <p>or</p>
          <button className='google_signin'><img width={20} src={googleIcon} alt="" /> &nbsp; Continue with Google</button>
        </form>
      </div>
      
    </div>
  );
};

export default Login;