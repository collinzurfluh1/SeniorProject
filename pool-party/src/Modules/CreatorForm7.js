import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        drain: props.getPoolDrain(),
      };
      this.updatePoolDrain = this.updatePoolDrain.bind(this); 


  }

  updatePoolDrain(event) {
    this.props.setPoolDrain(event.target.value); 
    this.setState({ drain: event.target.value });
    
  }

  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel" onChange={this.updatePoolDrain}>
              <h1>Pool Drain</h1>
              <input type="radio" id="poolDrain1" name="poolDrain" value="Skimmer" defaultChecked={this.state.drain === "Skimmer"}></input>
              <label for="poolDrain1">Skimmer</label><br></br>
              <input type="radio" id="poolDrain2" name="poolDrain" value="Gravity" defaultChecked={this.state.drain=== "Gravity"}></input>
              <label for="poolDrain2"> Gravity</label><br></br>
              <input type="radio" id="poolDrain3" name="poolDrain" value="Suction-Limiting" defaultChecked={this.state.drain === "Suction-Limiting"}></input>
              <label for="poolDrain3">Suction Limiting</label><br></br>             
          </div>
        </div>
      );
  
  }
}

export default CreatorForm7;
