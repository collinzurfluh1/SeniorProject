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
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('http://localhost:4000/getPools')
    .then(function(response){
      return response.json();
    })
    .then(function(pool) {
      setData(pool)
    });

  }

  useEffect(()=>{
    getData();
    refreshToken();
  },[])

  const creator = () => {
      navigate('/creator');
  }
    

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:4000/token');
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.username);
    } catch (error) {}
  }

  return (
    <div id="CommunityList">
      <div id='poolList'>
      {data.map(pool => (
        pool.owner == username? (
          <PoolListBody pool={pool}/>): null
      ))}
      </div>
       
  </div>
  );
}

export default MyPoolBody;