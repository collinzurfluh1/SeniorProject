import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";
import PipeOptions from "./PipeOptions.js";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        pipe: props.getPoolPipe(),
        drain: props.getPoolDrain()

      };
    this.updatePoolPipe = this.updatePoolPipe.bind(this); 
    this.updatePoolDrain = this.updatePoolDrain.bind(this); 

  }

  updatePoolPipe(event) {
    this.props.setPoolPipe(event.target.value); 
    this.setState({ pipe: event.target.value });
    
  }

  updatePoolDrain(event) {
    this.props.setPoolDrain(event.target.value); 
    this.setState({ drain: event.target.value });
    
  }



  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel" onChange={this.updatePoolPipe}>
              <h1>Plumbing</h1>
              <label for="pipe" className="CreatorFormLabel">Pipes:</label><br></br>
              <PipeOptions width={"5"} length={"5"} depth={"5"} pipe={this.state.pipe} onChange={this.updatePoolPipe}/>
              <label for="drains" className="CreatorFormLabel">Drains:</label><br></br>
              <div className="CreatorFormLabel" onChange={this.updatePoolDrain}>
              
              <h1>Pool Drain</h1>
              <input type="radio" id="poolDrain1" name="poolDrain" value="Skimmer" defaultChecked={this.state.drain === "Skimmer"}></input>
              <label for="poolDrain1">Skimmer</label><br></br>
              <input type="radio" id="poolDrain2" name="poolDrain" value="Gravity" defaultChecked={this.state.drain=== "Gravity"}></input>
              <label for="poolDrain2"> Gravity</label><br></br>
              <input type="radio" id="poolDrain3" name="poolDrain" value="Suction-Limiting" defaultChecked={this.state.drain === "Suction-Limiting"}></input>
              <label for="poolDrain3">Suction Limiting</label><br></br>             
            </div>
              <label for="skimmer" className="CreatorFormLabel">Skimmer:</label><br></br>



          </div>
        </div>
      );
  
  }
}

export default CreatorForm5;
