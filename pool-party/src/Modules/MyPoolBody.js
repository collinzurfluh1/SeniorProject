import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';
import PoolListBody from './PoolListBody';
import jwt_decode from "jwt-decode";

import '../SCSS/community.scss';
function MyPoolBody() {
  const navigate = useNavigate();

  const [username, setName] = useState('');


  useEffect(() => {
    refreshToken();
}, []);

  const creator = () => {
      navigate('/creator');
  }
    

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:4000/token');
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.username);
    } catch (error) {
    }
}


fetch('http://localhost:4000/getUserPools')
  .then(response => response.json())
  .then(data => console.log(data))


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

export default MyPoolBody;