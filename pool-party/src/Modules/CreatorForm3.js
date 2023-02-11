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
    this.setState({ material: event.target.value });
   
    
  }
    

  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel" onChange={this.updatePoolMaterial}>
          <label for="pool-material" class="CreatorFormLabel">Pool Material:</label><br></br>
            <select name="pool-material" value={this.state.material} id="pool-material">
            <option value="None">Select a Value</option>
            <option value="Gunnite">Gunnite</option>
            <option value="Vinyl">Vinyl</option>
             <option value="Fiber Glass">Fiber Glass</option>
            </select><br></br>
          </div>
          <div>
        

          { this.state.material == "Gunnite" && 
            <div id="Gunnite">
              <input type="radio" id="gunnite1" name="gunnite" value="Gunnite 1" defaultChecked={this.state.material === "gunnite1"}></input>
              <label for="gunnite1">Gunnite 1</label><br></br>
              <input type="radio" id="gunnite2" name="gunnite" value="Gunnite 2" defaultChecked={this.state.material === "gunnite2"}></input>
              <label for="gunnite2">Gunnite 2</label><br></br>
              <input type="radio" id="gunnite3" name="gunnite" value="Gunnite 3" defaultChecked={this.state.material === "gunnite3"}></input>
              <label for="gunnite3">Gunnite 3</label><br></br>
            </div>
          }   
          { this.state.material == "Vinyl" && 
            <div id="Vinyl">
              <input type="radio" id="vinyl1" name="vinyl" value="Vinyl 1" defaultChecked={this.state.material === "vinyl1"}></input>
              <label for="vinyl1">Vinyl 1</label><br></br>
              <input type="radio" id="vinyl2" name="vinyl" value="Vinyl 2" defaultChecked={this.state.material === "vinyl2"}></input>
              <label for="vinyl2">Vinyl 2</label><br></br>
              <input type="radio" id="vinyl3" name="vinyl" value="Vinyl 3" defaultChecked={this.state.material === "vinyl3"}></input>
              <label for="vinyl3">Vinyl 3</label><br></br>
            
            </div>
          } 
          { this.state.material == "Fiber Glass" && 
            <div id="Fiber Glass">
              <input type="radio" id="fg1" name="fg" value="fg1" defaultChecked={this.state.material === "fg1"}></input>
              <label for="fg1">Fiber Glass 1</label><br></br>
              <input type="radio" id="fg2" name="fg" value="fg2" defaultChecked={this.state.material === "fg2"}></input>
              <label for="fg2">Fiber Glass 2</label><br></br>
              <input type="radio" id="fg3" name="fg" value="fg3" defaultChecked={this.state.material === "fg3"}></input>
              <label for="fg3">Fiber Glass 3</label><br></br>
            
            </div>
          }     
          </div>

          </div>
      );
  
  }
}

export default CreatorForm3;
