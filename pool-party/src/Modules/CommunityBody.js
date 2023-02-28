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

  fetch('http://localhost:4000/getPools')
  .then(response => response.json())
  .then(data => {
      data.forEach(pool => {
        <PoolListBody />
      })
  })  

  return (
    <div id="CommunityList">
      <div id='poolList'>
      </div>
       
  </div>
  );
}

export default CommunityBody;