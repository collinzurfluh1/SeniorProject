import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";
import ChlorineOptions from './ChlorineOptions.js';
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
          'shock': props.getPoolChemicals()['cyaneuricAcid'] 
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
              <ChlorineOptions onChange={this.updateChlorine} chlorine={this.state.chlorine} length={"5"} width={"5"} depth={"5"} basinType={"gunnite"}/>
          </div>
          <div className="CreatorFormLabel" onChange={this.updateCyaneuricAcid}>
            <label for="cyaneuricAcid" class="CreatorFormLabel">Cyaneuric Acid</label><br></br>
            <select name="cyaneuricAcid" value={this.state.cyaneuricAcid}  id="cyaneuricAcid">
            <option value="Not Selected">Not Selected</option>
            <option value="cyaneuricAcid1">Cyaneuric Acid 1</option>
            <option value="cyaneuricAcid2">Cyaneuric Acid 2</option>
             <option value="cyaneuricAcid3">Cyaneuric Acid 3</option>
            </select>
          </div>
          <div className="CreatorFormLabel" onChange={this.updateShock}>
            <label for="shock" class="CreatorFormLabel">Shock</label><br></br>
            <select name="shock" value={this.state.shock}  id="shock">
            <option value="Not Selected">Not Selected</option>
            <option value="shock1">Shock 1</option>
            <option value="shock2">Shock 2</option>
            <option value="shock3">Shock 3</option>
            </select>
          </div>
        </div>
      );
  
  }
}

export default CreatorForm6;
