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
             
          </div>
        </div>
      );
  
  }
}

export default CreatorForm4;
