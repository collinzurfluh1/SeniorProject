import React, { Component } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';

import '../SCSS/smallheader.scss';
function SmallHeader() {
  const navigate = useNavigate();

  const creator = () => {
      navigate('/creator');
  }

  return (
    <div id="small_header">
        <div className="heroText">
          <h1>Community Pools</h1>
        </div>
  </div>
  );
}

export default SmallHeader;