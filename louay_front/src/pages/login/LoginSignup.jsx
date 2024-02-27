// Login.jsx

import React from 'react';
import './Login.css';
import {SignedIn, SignedOut, SignInButton, SignUpButton,SignOutButton } from "@clerk/clerk-react"
const Login = () => {
  return (
   
    <div class="center">
        <SignedOut>
     <SignInButton />
    
   
      <SignUpButton/>
 </SignedOut>
 <SignedIn>
        <h2>You are signed in</h2>
        <p>Welcome to the application</p>
        <SignOutButton/>
 </SignedIn>
       
    </div>

  );
};

export default Login;
