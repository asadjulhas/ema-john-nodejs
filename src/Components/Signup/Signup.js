import React, { useState } from 'react';
import './Signup.css'
import googleIcon from '../../images/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
const nagivate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handlePassword = event => {
    setPassword(event.target.value);
  }
  const handleEmail = event => {
    setEmail(event.target.value);
  }
  const handlConfirmPassword = event => {
    setConfirmPassword(event.target.value);
  }

  if(user) {
    nagivate('/')
  }

  const signUpForm = event => {
    event.preventDefault();

    if(!email) {
      setError('Please provide a email');
      return;
    }

    if(!password) {
      setError('Please provide a password');
      return;
    }

    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!validateEmail.test(email)) {
      setError('Please provide a valid email');
      return;
    }

    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(!validatePassword.test(password)) {
      setError('Password contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number:');
      return;
    }

    if(password !== confirmPassword) {
      setError('Password not match')
      return;
    }

    signInWithEmailAndPassword(email, password)

    
    // createUserWithEmailAndPassword(auth, email, password)
    // .then(res => {
    //   console.log(res.user);
    //   setError('');
    // })
    // .catch(error => {
    //   console.log(error.message)
    // })

  }
  return (
    <div>
       <div className="login_form signup">
        <h3>Sign Up</h3>
        <form onSubmit={signUpForm}>
          <label>Email</label><br />
          <input onChange={handleEmail} required type="email" /><br />
          <label>Password</label><br />
          <input required onChange={handlePassword} type="password" /><br />
          <label>Confirm Password</label><br />
          <input required onChange={handlConfirmPassword}  type="password" /><br />
          <span className='error_message'>{error}</span><br />
          <button className='login_btn'>{
            loading ? 'Loading...' : 'Sign Up'
          }</button><br />
          <span>Already have an account? <Link to='/login'>Login</Link></span>
          <p>or</p>
          <button className='google_signin'><img width={20} src={googleIcon} alt="" /> &nbsp; Continue with Google</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;