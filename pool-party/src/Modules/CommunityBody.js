import React, { Component } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';
import PoolListBody from './PoolListBody';

import '../SCSS/community.scss';
function CommunityBody() {
  const navigate = useNavigate();

  const creator = () => {
      navigate('/creator');
  }

  return (
    <div id="CommunityList">
      <div id='poolList'>
        <PoolListBody />
        <PoolListBody />
        <PoolListBody />
        <PoolListBody />
      </div>
       
  </div>
  );
}

export default CommunityBody;