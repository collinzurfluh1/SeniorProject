import * as React from "react";
import axios from 'axios';
import jwt_decode from 'jwt-decode'; 
import WinterCoverOptions from "./WinterCoverOptions";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
import SummerCoverOptions from "./SummerCoverOptions";
// How to get next/prev working?

class CreatorForm4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        summerCover: props.getPoolSummerCover(),
        winterCover: props.getPoolWinterCover()

      };
      this.updatePoolSummerCover = this.updatePoolSummerCover.bind(this); 
      this.updatePoolWinterCover= this.updatePoolWinterCover.bind(this); 

  }
  

  updatePoolSummerCover(event) {
    
    this.props.setPoolSummerCover(event.target.value); 
    this.setState({ summerCover: event.target.value });
   
    
  }
  updatePoolWinterCover(event) {
    this.props.setPoolWinterCover(event.target.value); 
    this.setState({ winterCover: event.target.value });
   
    
  }


  
  render() {
    return (
        <div id="Creator">

          <div className="CreatorFormLabel">
            
            <h1>Pool Covers</h1>
            <label for="winter-cover" class="CreatorFormLabel">Winter Cover:</label><br></br>
            <WinterCoverOptions width={"5"} length={"5"} winterCover={this.state.winterCover} onChange={this.updatePoolWinterCover}/>
          </div>
            <label for="summer-cover" class="CreatorFormLabel">Summer Cover:</label><br></br>
            <SummerCoverOptions width={"5"} length={"5"} summerCover={this.state.summerCover} onChange={this.updatePoolSummerCover}/>
        </div>
      );
  
  }
}

export default CreatorForm4;
