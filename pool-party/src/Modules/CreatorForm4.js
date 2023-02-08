import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm4 extends React.Component {
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
            <h1>Pool Covers</h1>
            <label for="winter-cover" class="CreatorFormLabel">Winter Cover:</label><br></br>
            <select name="winter-cover" id="winter-cover">
            <option value="cover1">None</option>
            <option value="cover2">Cover 1</option>
            <option value="cover3">Cover 2</option>
             <option value="cover4">Cover 3</option>
            </select><br></br>

            <label for="summer-cover" class="CreatorFormLabel">Summer Cover:</label><br></br>
            <select name="summer-cover" id="summer-cover">
            <option value="cover1">None</option>
            <option value="cover2">Cover 1</option>
            <option value="cover3">Cover 2</option>
             <option value="cover4">Cover 3</option>
            </select>
             
             
          </div>
        </div>
      );
  
  }
}

export default CreatorForm4;
