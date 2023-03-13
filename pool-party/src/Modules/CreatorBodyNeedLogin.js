import React from 'react'
import { Button } from '@mui/material';
import "../SCSS/creator.scss";


function CreatorBodyNeedLogin() {
  return (
    <div className='needsLoggedIn'>
        <h1>You need to be logged in to create a pool</h1>
        <Button variant="contained" href="/login">Login</Button>
        <Button variant="contained" href="/register">Register</Button>
    </div>

  );
}

export default CreatorBodyNeedLogin;
