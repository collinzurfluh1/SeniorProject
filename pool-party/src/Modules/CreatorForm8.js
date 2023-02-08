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
              <h1>Pool Skimmer</h1>
              <input type="radio" id="poolSkimmer1" name="poolSkimmer" value="Skimmer1" defaultChecked={this.state.material === "Skimmer1"}></input>
              <label for="poolSkimmer1">Skimmer 1</label><br></br>
              <input type="radio" id="poolDrain2" name="poolDrain" value="Skimmer2" defaultChecked={this.state.material === "Skimmer2"}></input>
              <label for="poolSkimmer2">Skimmer 2</label><br></br>
              <input type="radio" id="poolDrain3" name="poolDrain" value="Skimmer3" defaultChecked={this.state.material === "Skimmer3"}></input>
              <label for="poolSkimmer3">Skimmer 3</label><br></br>

             
          </div>
        </div>
      );
  
  }
}

export default CreatorForm8;
