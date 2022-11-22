import React, { Component } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';

import '../SCSS/home.scss';
function HomeBody() {
  const navigate = useNavigate();

  const creator = () => {
      navigate('/Creator');
  }
  const community = () => {
    navigate('/Community');
  } 

  return (
    <div id="Home">
      <div className="Hero-image">
        <div className="heroText">
          <h1>Pool Party</h1>
          <h3>Welcome To Pool Party. Design Your Dream Pool Today!</h3>
        </div>
        <div className="heroButton">
        <Button variant="contained" href="/Creator">Get Started</Button>
        <Button variant="contained" href="/Community">Community Pools</Button>
        </div>
      </div>
  </div>
  );
}

export default HomeBody;