import React from 'react';
import '../style/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

// Context API
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';

const Login = () => {
  const [state, setState] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <img
          src='https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/slack-logo-slide.IN.png'
          alt=''
        />
        <h1>Sign in to Clever Programmer HQ</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
