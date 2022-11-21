import React, { Component } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';

import '../SCSS/home.scss';
function CommunityBody() {
  const navigate = useNavigate();

  const creator = () => {
      navigate('/creator');
  }

  return (
    <div id="Home">
        <div className="heroText">
          <h1>Community Pools</h1>
        </div>
  </div>
  );
}

export default CommunityBody;