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
        lining: (pool['material'] == 'Vinyl') ? pool['materialData']['lining'] : "Not Applicable",
        plaster: (pool['material'] == 'Gunnite') ? pool['materialData']['plaster'] : 'Not Applicable',
        wall: (pool['material'] == 'Vinyl') ? pool['materialData']['wall'] : "Not Applicable",
        material: pool['materialData']['materialBrand'],
        summerCover: pool['summerCover'],
        winterCover: pool['winterCover'],
        pipe: pool['pipe'],
        basinLiner: pool['materialData']['basinLiner'],
        drain: pool['drain'],
        skimmer: pool['skimmer'],
        pump: pool['pump']
      };
     

  }



  
  render() {
    return (
        <div id="Creator">
          <h1>{this.state.name}: Page 2</h1>
          <h4>Gunnite Options</h4>
          <p>Pool Concrete: {this.state.materialBrand}</p>
          <p>Pool Plaster: {this.state.plaster}</p>
          <h4>Vinyl Options</h4>
          <p>Pool Wall: {this.state.wall}</p>
          <p>Pool Lining: {this.state.lining}</p>
          <h4>All-Pool Options</h4>
          <p>Pool Summer Cover: {this.state.summerCover}</p>
          <p>Pool Winter Cover: {this.state.winterCover}</p>
          <p>Pool Pipe: {this.state.pipe}</p>
          <p>Pool Drain: {this.state.drain}</p>
          <p>Pool Skimmer: {this.state.skimmer}</p>
          <p>Pool Pump: {this.state.pump}</p>
        </div>
      );
  
  }
}

export default CreatorFormFinal2;
