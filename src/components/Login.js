import React from 'react'
import { Button } from '@mui/material'
import { LoginContainer, LoginInnerContainer } from '../styles/Login.style'
import { auth, provider } from '../firebase';

function Login() {

const signIn = (event) => {
  event.preventDefault();

  auth.signInWithPopup(provider)
    .catch((error) => alert(error.message));
};

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://cdn.iconscout.com/icon/free/png-512/slack-logo-1481728-1254330.png?f=avif&w=256'
          alt=''
        />
        <h1>Sign In</h1>
        <Button onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login
