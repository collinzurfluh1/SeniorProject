import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import $ from "jquery";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        material: props.getPoolMaterial()
      };
      this.updatePoolMaterial = this.updatePoolMaterial.bind(this); 

  }


  updatePoolMaterial(event) {
    this.props.setPoolMaterial(event.target.value); 
   
    
  }
    

  
  render() {
    return (
        <div id="Creator">
          <div className="heroText" onChange={this.updatePoolMaterial}>
              <h1>Pool Material</h1>
              <input type="radio" id="poolMaterial1" name="poolMaterial" value="Concrete" defaultChecked={this.state.material === "Concrete"}></input>
              <label for="poolMaterial1"> Concrete</label><br></br>
              <input type="radio" id="poolMaterial2" name="poolMaterial" value="Vinyl" defaultChecked={this.state.material === "Vinyl"}></input>
              <label for="poolMaterial2"> Vinyl</label><br></br>
              <input type="radio" id="poolMaterial3" name="poolMaterial" value="Fiber Glass" defaultChecked={this.state.material === "Fiber Glass"}></input>
              <label for="poolMaterial3"> Fiber Glass</label><br></br>

          </div>
        </div>
      );
  
  }
}

export default CreatorForm3;
