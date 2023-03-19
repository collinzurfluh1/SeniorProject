import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";
import PipeOptions from "./PipeOptions.js";
import DrainOptions from './DrainOptions.js'
import SkimmerOptions from './SkimmerOptions.js'


import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        pipe: props.getPoolPipe(),
        drain: props.getPoolDrain(),
        skimmer: props.getPoolSkimmer()

      };

    this.updatePoolPipe = this.updatePoolPipe.bind(this); 
    this.updatePoolDrain = this.updatePoolDrain.bind(this); 
    this.updatePoolSkimmer = this.updatePoolSkimmer.bind(this);

  }

  updatePoolPipe(event) {
    this.props.setPoolPipe(event.target.value); 
    this.setState({ pipe: event.target.value });
    
  }

  updatePoolDrain(event) {
    this.props.setPoolDrain(event.target.value); 
    this.setState({ drain: event.target.value });
    
  }

  updatePoolSkimmer(event) {
    this.props.setPoolSkimmer(event.target.value); 
    this.setState({ skimmer: event.target.value });
    
  }



  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormLabel">
              <h1>Plumbing</h1>
              <label for="pipe" className="CreatorFormLabel">Pipes:</label><br></br>
              <PipeOptions width={this.props.getPoolMaterialData()['width']} length={this.props.getPoolMaterialData()['length']} depth={this.props.getPoolMaterialData()['depth']} pipe={this.state.pipe} onChange={this.updatePoolPipe}/>
              <label for="drains" className="CreatorFormLabel">Drains:</label><br></br>
              <DrainOptions drain={this.state.drain} onChange={this.updatePoolDrain}/>
              <label for="skimmer" className="CreatorFormLabel">Skimmer:</label><br></br>
              <SkimmerOptions skimmer={this.state.skimmer} onChange={this.updatePoolSkimmer}/>



          </div>
        </div>
      );
  
  }
}

export default CreatorForm5;
