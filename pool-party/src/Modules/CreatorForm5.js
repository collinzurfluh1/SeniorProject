import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        pipe: props.getPoolPipe()
      };
    this.updatePoolPipe = this.updatePoolPipe.bind(this); 

  }

  updatePoolPipe(event) {
    this.props.setPoolPipe(event.target.value); 
    this.setState({ pipe: event.target.value });
    
  }


  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel" onChange={this.updatePoolPipe}>
              <h1>Pool Piping Options</h1>
              <input type="radio" id="poolPipe1" name="poolPipe" value="PVC-Rigid" defaultChecked={this.state.pipe === "PVC-Rigid"}></input>
              <label for="poolPipe1">Rigid PVC</label><br></br>
              <input type="radio" id="poolPipe2" name="poolPipe" value="PVC-Flex" defaultChecked={this.state.pipe === "PVC-Flex"}></input>
              <label for="poolPipe2">Flex PVC</label><br></br>
              <input type="radio" id="poolPipe3" name="poolPipe" value="Black Poly" defaultChecked={this.state.pipe === "Black Poly"}></input>
              <label for="poolPipe3">Black Poly</label><br></br>
          </div>
        </div>
      );
  
  }
}

export default CreatorForm5;
