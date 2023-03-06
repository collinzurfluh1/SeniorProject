import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";

class CreatorFormFinal2 extends React.Component {
  constructor(props) {
    super(props);
    var pool = props.getPool(); 
    this.state = {
        name: pool['name'],
        rebar: (pool['material'] == 'Gunnite') ? pool['materialData']['rebar'] : 'Not Applicable',
        lining: (pool['material'] == 'Vinyl') ? pool['materialData']['lining'] : "Not Applicable",
        plaster: (pool['material'] == 'Gunnite') ? pool['materialData']['plaster'] : 'Not Applicable',
        wall: (pool['material'] == 'Vinyl') ? pool['materialData']['wall'] : "Not Applicable",
        material: pool['materialData']['materialBrand'],
        summerCover: pool['summerCover'],
        winterCover: pool['winterCover'],
        pipe: pool['pipe'],
        basinLiner: pool['basinLiner'],
        drain: pool['drain'],
        skimmer: pool['skimmer'],
        pump: pool['pump']
      };
     

  }



  
  render() {
    return (
        <div id="Creator">
          <h1>{this.state.name}: Page 2</h1>

          <p>Pool Rebar: {this.state.rebar}</p>
          <p>Pool Plaster: {this.state.plaster}</p>
          <p>Pool Wall: {this.state.wall}</p>
          <p>Pool Lining: {this.state.lining}</p>
          <p>Pool Summer Cover: {this.state.summerCover}</p>
          <p>Pool Winter Cover: {this.state.winterCover}</p>
          <p>Pool Pipe: {this.state.pipe}</p>
          <p>Pool Basin Liner: {this.state.basinLiner}</p>
          <p>Pool Drain: {this.state.drain}</p>
          <p>Pool Skimmer: {this.state.skimmer}</p>
          <p>Pool Pump: {this.state.pump}</p>
        </div>
      );
  
  }
}

export default CreatorFormFinal2;
