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
        <div class="Pool-Elements">
        <h1>Choose Pool Shape</h1>

        <form>
          <input type="radio" id="circle" class="Next-Button" name="pool_shape"></input>
          <label for="pool_shape">Circular Pool  </label>
          <input type="radio" id="square"j class="Next-Button" name="pool_shape"></input>
          <label for="pool_shpae">Square Pool  </label>
          <input type="radio" id="rectangle" class="Next-Button" name="pool_shape"></input>
          <label for="pool_shape">Rectangular Pool  </label>
          <br></br>
          <button type="button" class="Prev-Button">Prev</button>
          <button type="button" class="Next-Button">Next</button>
         </form>
        </div>
        <div>
          <script>console.log("You have the BIG GAY!!");</script>


        </div>

  </div>
  );
}

export default CreatorBody;