import React, { Component } from 'react'; 
import { Button } from '@mui/material';
import { createRoutesFromElements, useNavigate } from 'react-router-dom';
import $ from 'jquery'; 


import '../SCSS/creator.scss';


function circleClick(){
  document.getElementById("circle-box").style.display = "block";
  document.getElementById("square-box").style.display = "none";
  document.getElementById("rect-box").style.display = "none";  


}
function squareClick(){
  document.getElementById("circle-box").style.display = "none";
  document.getElementById("square-box").style.display = "block";
  document.getElementById("rect-box").style.display = "none";  


}

function rectClick(){
  document.getElementById("circle-box").style.display = "none";
  document.getElementById("square-box").style.display = "none";
  document.getElementById("rect-box").style.display = "block";  


}
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
          <input type="radio" id="circle" onClick={() => circleClick()} className="Next-Button" name="pool_shape"></input>
          <label for="pool_shape">Circular Pool  </label>
          <input type="radio" id="square" onClick={() => squareClick()} className="Next-Button" name="pool_shape"></input>
          <label for="pool_shpae">Square Pool  </label>
          <input type="radio" id="rectangle" onClick={() => rectClick()} className="Next-Button" name="pool_shape"></input>
          <label for="pool_shape">Rectangular Pool  </label>
          <br></br>
          <button type="button" class="Prev-Button">Prev</button>
          <button type="button" class="Next-Button">Next</button>
         </form>
        </div>
        <div id="circle-box" className="Dimensions-Form"> 
          <h1>Circle</h1> 
          <form>
            <label for="fname">Radius:</label>
            <input type="text"></input><br></br>
            <label for="fname">Depth:</label>
            <input type="text"></input>

          </form>
        </div>
        <div id="square-box" className="Dimensions-Form">
          <h1>Square</h1> 
          <form>
            <label for="fname">Size:</label>
            <input type="text"></input><br></br>
            <label for="fname">Depth:</label>
            <input type="text"></input>
          </form>
          </div>
        <div id="rect-box" className="Dimensions-Form"> 
        <h1>Rectangle</h1> 
          <form>
            <label for="fname">Width:</label>
            <input type="text"></input><br></br>
            <label for="fname">Length:</label>
            <input type="text"></input><br></br>
            <label for="fname">Depth:</label>
            <input type="text"></input>
          </form>
        
        </div>

  </div>
  );
 
  
}

export default CreatorBody;