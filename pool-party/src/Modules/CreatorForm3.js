import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
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
          <div className="CreatorFormTitle" onChange={this.updatePoolMaterial}>
              <h2>Pool Material</h2>
              <input type="radio" id="poolMaterial1" name="poolMaterial" value="Concrete" defaultChecked={this.state.material === "Concrete"}></input>
              <label className="CreatorFormLabel" for="poolMaterial1"> Concrete</label><br></br>
              <input type="radio" id="poolMaterial2" name="poolMaterial" value="Vinyl" defaultChecked={this.state.material === "Vinyl"}></input>
              <label className="CreatorFormLabel" for="poolMaterial2"> Vinyl</label><br></br>
              <input type="radio" id="poolMaterial3" name="poolMaterial" value="Fiber Glass" defaultChecked={this.state.material === "Fiber Glass"}></input>
              <label className="CreatorFormLabel" for="poolMaterial3"> Fiber Glass</label><br></br>

          </div>
        </div>
      );
  
  }
}

export default CreatorForm3;
