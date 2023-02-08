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
      };
     

  }


  
  render() {
    return (
        <div id="Creator">
          <div className="heroText">
              <h1>Pool Piping Options</h1>
              <input type="radio" id="poolPipe1" name="poolPipe" value="PVC-Rigid" defaultChecked={this.state.material === "PVC-Rigid"}></input>
              <label for="poolPipe1">Rigid PVC</label><br></br>
              <input type="radio" id="poolPipe1" name="poolPipe" value="PVC-Flex" defaultChecked={this.state.material === "PVC-Flex"}></input>
              <label for="poolPipe1">Flex PVC</label><br></br>
              <input type="radio" id="poolPipe3" name="poolPipe" value="Black Poly" defaultChecked={this.state.material === "Black Poly"}></input>
              <label for="poolPipe3">Black Poly</label><br></br>
          </div>
        </div>
      );
  
  }
}

export default CreatorForm5;
