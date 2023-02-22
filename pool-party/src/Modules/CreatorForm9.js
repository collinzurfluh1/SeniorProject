import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        
        pump: props.getPoolPump()

      };
    this.updatePoolPump = this.updatePoolPump.bind(this); 
     

  }

  updatePoolPump(event) {
    this.props.setPoolPump(event.target.value); 
    this.setState({ pump: event.target.value });
    
  }

  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel" onChange={this.updatePoolPump}>
              <h1>Pool Pump</h1>
              <input type="radio" id="poolPump1" name="poolPump" value="Pump1" defaultChecked={this.state.pump === "Pump1"}></input>
              <label for="poolPump1">Pump 1</label><br></br>
              <input type="radio" id="poolPump2" name="poolPump" value="Pump2" defaultChecked={this.state.pump === "Pump2"}></input>
              <label for="poolPump2">Pump 2</label><br></br>
              <input type="radio" id="poolPump3" name="poolPump" value="Pump3" defaultChecked={this.state.pump === "Pump3"}></input>
              <label for="poolPump3">Pump 3</label><br></br>

             
          </div>
        </div>
      );
  
  }
}

export default CreatorForm9;
