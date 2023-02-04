import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
// How to get next/prev working?

class CreatorForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        showShallowEndDiv: props.getPoolHasShallowEnd(),
        poolWidth: props.getPoolWidth(),
        poolLength: props.getPoolLength(),
        poolDepth: props.getPoolDepth(),
        shallowDepth: props.getShallowDepth(),
        deepDepth: props.getDeepDepth(),
      };
     this.updatePoolWidth = this.updatePoolWidth.bind(this); 
     this.updatePoolLength = this.updatePoolLength.bind(this);
     this.updatePoolDepth = this.updatePoolDepth.bind(this); 
     this.updateShallowDepth = this.updateShallowDepth.bind(this);
     this.updateDeepDepth= this.updateDeepDepth.bind(this); 
     this.flipPoolHasShallowEnd = this.flipPoolHasShallowEnd.bind(this);
    

 

  }
  updatePoolWidth(event){
    
    this.props.setPoolWidth(event.target.value);

  }
  updatePoolLength(event){
    
    this.props.setPoolLength(event.target.value);

  }

  updatePoolDepth(event){
    
    this.props.setPoolDepth(event.target.value);

  }
  updateShallowDepth(event){
    
    this.props.setShallowDepth(event.target.value);

  }

  updateDeepDepth(event){
    this.props.setDeepDepth(event.target.value);
  }


  flipPoolHasShallowEnd(){
          // Show the deep end div
          this.setState({ showShallowEndDiv: !this.state.showShallowEndDiv });
          this.props.flipPoolHasShallowEnd();
  }
  
  render() {
    return (
        <div id="Creator">
          <div className="CreatorFormTitle">
            <h2>Please Choose the Pool Shape</h2>
            <label className="CreatorFormLabel">Width: </label>
            <input type="text" defaultValue={this.state.poolWidth} onChange={this.updatePoolWidth}></input><br></br>
            <label className="CreatorFormLabel">Length: </label>
            <input type="text" defaultValue={this.state.poolLength} onChange={this.updatePoolLength}></input><br></br>

            <label className="CreatorFormLabel">Shallow End?</label>
            <input type="checkbox" defaultChecked={this.state.showShallowEndDiv} onClick={this.flipPoolHasShallowEnd}></input>

          { !this.state.showShallowEndDiv && 
            <div id="NoShallowEnd">
              <label className="CreatorFormLabel">Depth: </label>
              <input type="text" defaultValue={this.state.poolDepth} onChange={this.updatePoolDepth}></input><br></br>
            </div>
          }   
          { this.state.showShallowEndDiv &&
            <div id="ShallowEnd">
              <label className="CreatorFormLabel">Shallow Depth: </label>
              <input type="text" defaultValue={this.state.shallowDepth} onChange={this.updateShallowDepth}></input><br></br>
              <label className="CreatorFormLabel">Deep Depth: </label>
              <input type="text" defaultValue={this.state.deepDepth} onChange={this.updateDeepDepth}></input><br></br>
            </div>
          }
          </div>
        </div>
      );
  
  }
}

export default CreatorForm2;
