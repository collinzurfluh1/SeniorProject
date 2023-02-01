import React, { Component } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';

import '../SCSS/smallheader.scss';
import MyPools from '../Views/MyPools';
function MyPoolHeader() {
  const navigate = useNavigate();

  const creator = () => {
      navigate('/creator');
  }

  return (
    <div id="small_header">
        <div className="heroText">
          <h1>My Pools</h1>
        </div>
  </div>
  );
}

export default MyPoolHeader;