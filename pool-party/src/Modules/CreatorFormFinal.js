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
      width: pool['materialData']['width'],
      length: pool['materialData']['length'],
      depth:  (pool['material'] != 'Gunite') ? 'Not Applicable' : pool['materialData']['depth'],
      shallowDepth: (pool['material'] != 'Gunite') ? pool['materialData']['shallowDepth'] : "Not Applicable",
      deepDepth: (pool['material'] != 'Gunite') ? pool['materialData']['deepDepth'] : "Not Applicable",
      slant: (pool['material'] == 'Vinyl') ? pool['materialData']['slant'] : "Not Applicable",
      shell: (pool['material'] == 'Fiber Glass') ? pool['materialData']['shell'] : "Not Applicable",
      chlorine: pool['chemicals']['chlorine'],
      cyanuricAcid: pool['chemicals']['cyanuricAcid'],
      shock: pool['chemicals']['shock'],
      summerCover: pool['summerCover'],
      winterCover: pool['winterCover'],
      pipe: pool['pipe'],
      basinLiner: pool['materialData']['basinLiner'],
      drain: pool['drain'],
      skimmer: pool['skimmer'],
      lining: (pool['material'] == 'Vinyl') ? pool['materialData']['lining'] : "Not Applicable",
      plaster: (pool['material'] == 'Gunite') ? pool['materialData']['plaster'] : 'Not Applicable',
      wall: (pool['material'] == 'Vinyl') ? pool['materialData']['wall'] : "Not Applicable",
      

       
      };

      const creatorFormScss = document.getElementsByClassName("creatorForm")[0];
      creatorFormScss.style.width = "100%";
      creatorFormScss.style.maxWidth = "100%";
      creatorFormScss.style.borderRadius = "unset";
      const creatorBody = document.getElementsByClassName("creator-body")[0];
      creatorBody.style.height = "unset";
      const submitButton = document.getElementById("nextButton");
      submitButton.style.width = "100%";


  }


  
  render() {
    return (
        <div id="Creator">
          <h1>Pool Summary:</h1>
          <p>Pool Name: {this.state.name}</p>
          <p>Pool Basin Type: {this.state.material}</p>
          <h4>Materials & Dimensions</h4>

          {this.state.material == "Fiber Glass" &&
                <div id="FiberGlassDisplay">
                <p>Shell: {this.state.shell}</p>
                <p>Width: {this.state.width}</p>
                <p>Length: {this.state.length}</p>
                <p>Shallow Depth: {this.state.shallowDepth}</p>
                <p>Deep Depth: {this.state.deepDepth}</p>

                </div>
          }
          {this.state.material == "Vinyl" &&   
          <div>
          <p>Wall: {this.state.wall}</p>
          <p>Liner: {this.state.lining}</p>
          <p>Width: {this.state.width}</p>
          <p>Length: {this.state.length}</p>
          <p>Shallow Depth: {this.state.shallowDepth}</p>
          <p>Deep Depth: {this.state.deepDepth}</p>
          <p>Floor Type: {this.state.slant}</p>
          </div>      
       
        }
          {this.state.material == "Gunite" &&   
          <div>
          <p>Pool Concrete: {this.state.materialBrand}</p>
          <p>Pool Plaster: {this.state.plaster}</p>
          <p>Width: {this.state.width}</p>
          <p>Length: {this.state.length}</p>
          <p>Depth: {this.state.depth}</p>
          </div>      
       
        }
          <h4>Chemicals</h4>
          <p>Pool Chlorine: {this.state.chlorine}</p>
          <p>Pool Cyanuric Acid: {this.state.cyanuricAcid}</p>
          <p>Pool Shock: {this.state.shock}</p>

          <h4>Covers</h4>
          <p>Solar Cover: {this.state.summerCover}</p>
          <p>Winter Cover: {this.state.winterCover}</p>
         
          <h4>Plumbing</h4>
          <p>Pool Pipe: {this.state.pipe}</p>
          <p>Pool Drain: {this.state.drain}</p>
          <p>Pool Skimmer: {this.state.skimmer}</p>
      
        </div>
      );
  
  }
}

export default CreatorFormFinal;
