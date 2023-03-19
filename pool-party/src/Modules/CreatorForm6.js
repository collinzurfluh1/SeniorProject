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
        cyanuricAcid: props.getPoolChemicals()['cyanuricAcid'],
        shock: props.getPoolChemicals()['shock'],

        chemicals: {
          'chlorine': props.getPoolChemicals()['chlorine'],
          'cyanuricAcid': props.getPoolChemicals()['cyanuricAcid'],
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
        'cyanuricAcid': this.state.cyanuricAcid,
        'shock': this.state.shock
    }); 
    this.setState({ chlorine: event.target.value });
  }
  updateCyaneuricAcid(event) {
    this.props.setPoolChemicals({
        'chlorine': this.state.chlorine,
        'cyanuricAcid': event.target.value,
        'shock': this.state.shock
    }); 
    this.setState({ cyanuricAcid: event.target.value });
  }
  
  updateShock(event) {
    this.props.setPoolChemicals({
        'chlorine': this.state.chlorine,
        'cyanuricAcid': this.state.cyanuricAcid,
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
              <ChlorineOptions onChange={this.updateChlorine} chlorine={this.state.chlorine} deepDepth={this.props.getPoolMaterialData()['deepDepth']} floorType={this.props.getPoolMaterialData()['slant']} length={this.props.getPoolMaterialData()['length']} width={this.props.getPoolMaterialData()['width']} depth={this.props.getPoolMaterialData()['depth']} basinType={"gunite"}/>
             </div>
             <label for="cyanuricAcid" class="CreatorFormLabel">Cyanuric Acid</label><br></br>
             <CyaneuricAcidOptions onChange={this.updateCyaneuricAcid} cyanuricAcid={this.state.cyanuricAcid} length={this.props.getPoolMaterialData()['length']} width={this.props.getPoolMaterialData()['width']} depth={this.props.getPoolMaterialData()['depth']} deepDepth={this.props.getPoolMaterialData()['deepDepth']} floorType={this.props.getPoolMaterialData()['slant']} basinType={"gunite"}/>
             <label for="shock" class="CreatorFormLabel">Shock</label><br></br>
             <ShockOptions onChange={this.updateShock} shock={this.state.shock} length={this.props.getPoolMaterialData()['length']} width={this.props.getPoolMaterialData()['width']} depth={this.props.getPoolMaterialData()['depth']} deepDepth={this.props.getPoolMaterialData()['deepDepth']} floorType={this.props.getPoolMaterialData()['slant']} basinType={"gunite"}/>
        
        
        </div>
      );
  
  }
}

export default CreatorForm6;
