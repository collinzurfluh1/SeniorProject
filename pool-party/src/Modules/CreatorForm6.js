import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";
import ChlorineOptions from './ChlorineOptions.js';
import CyaneuricAcidOptions from './CyaneuricAcidOptions.js';
import ShockOptions from "./ShockOptions.js";
import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        chlorine: props.getPoolChemicals()['chlorine'],
        cyaneuricAcid: props.getPoolChemicals()['cyaneuricAcid'],
        shock: props.getPoolChemicals()['shock'],

        chemicals: {
          'chlorine': props.getPoolChemicals()['chlorine'],
          'cyaneuricAcid': props.getPoolChemicals()['cyaneuricAcid'],
          'shock': props.getPoolChemicals()['shock'] 
        }
      };
      this.updateChlorine = this.updateChlorine.bind(this); 
      this.updateCyaneuricAcid = this.updateCyaneuricAcid.bind(this); 
      this.updateShock = this.updateShock.bind(this); 
      


  } 
  updateChlorine(event) {
  
    this.props.setPoolChemicals({
        'chlorine': event.target.value,
        'cyaneuricAcid': this.state.cyaneuricAcid,
        'shock': this.state.shock
    }); 
    this.setState({ chlorine: event.target.value });
  }
  updateCyaneuricAcid(event) {
    this.props.setPoolChemicals({
        'chlorine': this.state.chlorine,
        'cyaneuricAcid': event.target.value,
        'shock': this.state.shock
    }); 
    this.setState({ cyaneuricAcid: event.target.value });
  }
  
  updateShock(event) {
    this.props.setPoolChemicals({
        'chlorine': this.state.chlorine,
        'cyaneuricAcid': this.state.cyaneuricAcid,
        'shock': event.target.value
    }); 
    this.setState({ shock: event.target.value });

  }
  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel">
            <h1>Pool Chemicals</h1>
              <label for="chlorine" class="chlorine">Chlorine:</label><br></br>
              <ChlorineOptions onChange={this.updateChlorine} chlorine={this.state.chlorine} deepDepth={"5"} floorType={"Slant"} length={"5"} width={"5"} depth={"5"} basinType={"gunnite"}/>
             </div>
             <label for="cyaneuricAcid" class="CreatorFormLabel">Cyaneuric Acid</label><br></br>
             <CyaneuricAcidOptions onChange={this.updateCyaneuricAcid} cyaneuricAcid={this.state.cyaneuricAcid} length={"5"} width={"5"} depth={"5"} deepDepth={"5"} floorType={"Slant"} basinType={"gunnite"}/>
             <label for="shock" class="CreatorFormLabel">Shock</label><br></br>
             <ShockOptions onChange={this.updateShock} shock={this.state.shock} length={"5"} width={"5"} depth={"5"} deepDepth={"5"} floorType={"Slant"} basinType={"gunnite"}/>
        
        
        </div>
      );
  
  }
}

export default CreatorForm6;
