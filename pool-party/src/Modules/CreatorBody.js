import React, { Component } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';

import '../SCSS/creator.scss';
function CreatorBody() {
  const navigate = useNavigate();

  const creator = () => {
      navigate('/creator');
  }

  return (
    <div id="Creator">
        <div className="heroText">
          <h1>Creator Portal</h1>
        </div>
  </div>
  );
}

export default CreatorBody;