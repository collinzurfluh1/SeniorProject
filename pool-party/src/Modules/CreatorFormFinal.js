import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";

class CreatorFormFinal extends React.Component {
  constructor(props) {
    super(props);
    var pool = props.getPool(); 
    this.state = {
        name: pool['name'],
        material: pool['material'],
        materialBrand: pool['materialData']['materialBrand'],
        width: pool['width'],
        length: pool['length'],
        shallowDepth: pool['shallowDepth'],
        deepDepth: pool['deepDepth'],
        slant: pool['slant'],

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
          <h1>Final Pool Object</h1>
          <p>Pool Name: {this.state.name}</p>
          <p>Pool Material: {this.state.material}</p>
          <p>Pool Material Brand: {this.state.materialBrand}</p>
          <p>Pool Width: {this.state.width}</p>
          <p>Pool Length: {this.state.length}</p>
          <p>Pool Shallow Depth: {this.state.shallowDepth}</p>
          <p>Pool Deep Depth: {this.state.deepDepth}</p>
          <p>Pool Slant: {this.state.slant}</p>
       
          <p>Pool Summer Cover: {this.state.summerCover}</p>
          <p>Pool Winter Cover: {this.state.winterCover}</p>
          <p>Pool Pipe: {this.state.pipe}</p>
          <p>Pool Basin Liner: {this.state.basinLiner}</p>
          <p>Pool Drain: {this.state.drain}</p>
          <p>Pool Skimmer: {this.state.skimmer}</p>
          <p>Pool Pump: {this.state.pump}</p>
          <p>Pool Material: {this.state.materialBrand}</p>
        </div>
      );
  
  }
}

export default CreatorFormFinal;
