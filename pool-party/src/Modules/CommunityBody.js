import React, { useState, useEffect } from 'react'; 
import { createRoutesFromElements, useNavigate } from 'react-router-dom';
import PoolListBody from './PoolListBody';

import '../SCSS/community.scss';
function CommunityBody() {
  const navigate = useNavigate();
  const [data,setData]=useState([]);

  const creator = () => {
      navigate('/creator');
  }

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
    getData()
  },[])

  
  return (
    <div id="CommunityList">
      <div id='poolList'>
      {data.map(pool => (  
            <PoolListBody pool={pool}/>
      ))}  
      </div>
       
  </div>
  );
}

export default CommunityBody;