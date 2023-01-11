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
        <div>
        <h1>Choose Pool Shape</h1>

        <form>
          <input type="radio" id="circle" name="pool_shape"></input>
          <label for="pool_shape">Circular Pool</label>
          <input type="radio" id="square" name="pool_shape"></input>
          <label for="pool_shpae">Square Pool</label>
          <input type="radio" id="rectangle" name="pool_shape"></input>
          <label for="pool_shape">Circular Pool</label>
          <button type="button">Prev</button>
          <button type="button">Next</button>
         </form>
        </div>

  </div>
  );
}

export default CreatorBody;