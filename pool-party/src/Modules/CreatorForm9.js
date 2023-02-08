import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
      };
     

  }


  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel">
              <h1>Pool Pump</h1>
              <input type="radio" id="poolPump1" name="poolPump" value="Pump1" defaultChecked={this.state.material === "Pump1"}></input>
              <label for="poolPump1">Pump 1</label><br></br>
              <input type="radio" id="poolPump2" name="poolPump" value="Pump2" defaultChecked={this.state.material === "Pump2"}></input>
              <label for="poolPump2">Pump 2</label><br></br>
              <input type="radio" id="poolPump3" name="poolPump" value="Pump3" defaultChecked={this.state.material === "Pump3"}></input>
              <label for="poolPump3">Pump 3</label><br></br>

             
          </div>
        </div>
      );
  
  }
}

export default CreatorForm8;
