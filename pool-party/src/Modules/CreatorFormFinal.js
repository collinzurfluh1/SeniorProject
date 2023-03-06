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
      materialBrand: (pool['material'] == 'Fiber Glass') ? "Not Applicable" : pool['materialData']['materialBrand'],
      width: (pool['material'] == 'Fiber Glass') ? 'Not Applicable' : pool['materialData']['width'],
      length:  (pool['material'] == 'Fiber Glass') ? 'Not Applicable' : pool['materialData']['length'],
      depth:  (pool['material'] != 'Gunnite') ? 'Not Applicable' : pool['materialData']['depth'],
      shallowDepth: (pool['material'] == 'Vinyl') ? pool['materialData']['shallowDepth'] : "Not Applicable",
      deepDepth: (pool['material'] == 'Vinyl') ? pool['materialData']['deepDepth'] : "Not Applicable",
      slant: (pool['material'] == 'Vinyl') ? pool['materialData']['slant'] : "Not Applicable",
      shell: (pool['material'] == 'Fiber Glass') ? pool['materialData']['shell'] : "Not Applicable",

       
      };

     

  }



  
  render() {
    return (
        <div id="Creator">
          <h1>{this.state.name}: Page 1</h1>
          <p>Pool Name: {this.state.name}</p>
          <p>Pool Material: {this.state.material}</p>
          <p>Pool Concrete: {this.state.materialBrand}</p>
          <p>Fiber Glass Shell: {this.state.shell}</p>
          <p>Pool Width: {this.state.width}</p>
          <p>Pool Length: {this.state.length}</p>
          <p>Pool Depth: {this.state.depth}</p>
          <p>Pool Shallow Depth: {this.state.shallowDepth}</p>
          <p>Pool Deep Depth: {this.state.deepDepth}</p>
          <p>Pool Slant: {this.state.slant}</p>

        </div>
      );
  
  }
}

export default CreatorFormFinal;
