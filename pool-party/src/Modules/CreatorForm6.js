import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        basinLiner: props.getPoolBasinLiner()
      };
      this.updatePoolBasinLiner = this.updatePoolBasinLiner.bind(this); 


  }
  updatePoolBasinLiner(event) {
  
    this.props.setPoolBasinLiner(event.target.value); 
    this.setState({ basinLiner: event.target.value });
   
    
  }


  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel" onChange={this.updatePoolBasinLiner}>
              <h1>Pool Basin Liner</h1>
              <input type="radio" id="poolLiner1" name="poolMaterial" value="Island Wave" defaultChecked={this.state.basinLiner === "Island Wave"}></input>
              <label for="poolLiner1"> Island Wave</label><br></br>
              <input type="radio" id="poolLiner2" name="poolMaterial" value="Grey Crystal" defaultChecked={this.state.basinLiner === "Grey Crystal"}></input>
              <label for="poolLiner2"> Grey Crystal</label><br></br>
              <input type="radio" id="poolLiner3" name="poolMaterial" value="Stardust Blue" defaultChecked={this.state.basinLiner === "Stardust Blue"}></input>
              <label for="poolLiner3">Stardust Blue</label><br></br>

             
          </div>
        </div>
      );
  
  }
}

export default CreatorForm6;
