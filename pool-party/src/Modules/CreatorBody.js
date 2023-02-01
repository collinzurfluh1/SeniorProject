import * as React from "react";
import Component from "react";
import { render } from "react-dom";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";
import ref from "react"; 
import CreatorForm1 from "../Modules/CreatorForm1";

import CreatorForm2 from "../Modules/CreatorForm2";
import CreatorForm3 from "../Modules/CreatorForm3";

import "../SCSS/creator.scss";
// How to get next/prev working?
class CreatorBody extends React.Component {
  constructor(props) {
    super(props);
    this.currIndex = 1;
    this.state = {
      name: "React",
      creatorForm1: true,
      creatorForm2: false,
      creatorForm3: false,
      _poolName: 'Name',
      _poolWidth: 0,
      _poolDepth: 0,
      _poolLength: 0,
      _poolMaterial: ""
    };
    this._form1 = React.createRef(); 
    this._form2 = React.createRef(); 
    this._form3 = React.createRef(); 
    this.hideComponent = this.hideComponent.bind(this);
    this.SetPoolName = this.SetPoolName.bind(this); 
  }


  /* Pool Width Getters And Setters*/
  GetPoolWidth = () => {
      return this.state._poolWidth; 

  }

  SetPoolWidth = (poolWidth) => {
    this.setState({_poolWidth: poolWidth}, function() {
     }); 
  }

  /* Pool Material Getters and Setters */
  GetPoolMaterial = () => {
    return this.state._poolMaterial; 

  }
  SetPoolMaterial = (poolMaterial) => {
    this.setState({_poolMaterial: poolMaterial}, function() {
     }); 
  }

  /* Pool Depth Getters and Setter*/
  GetPoolDepth = () => {
    return this.state._poolDepth; 

  }
  SetPoolDepth = (poolDepth) => {
    this.setState({_poolDepth: poolDepth}, function() {
     }); 
  }

  /* Pool Length Getter and Setter */
  
  GetPoolLength = () => {
    return this.state._poolLength; 
  }
  SetPoolLength = (poolLength) => {
    this.setState({_poolLength: poolLength}, function() {
     }); 
  }

  /* Pool Name Getter and Setter */
  SetPoolName = (poolName) => {
    this.setState({_poolName: poolName}, function() {
        

    });
  }
   GetPoolName = () => {
    return this.state._poolName; 


  }

  prev() {
    if(this.currIndex > 1){
      this.currIndex--;
      this.hideComponent(this.currIndex);
    }
  }
  next() {
    if(this.currIndex < 3){
      this.currIndex++;
      this.hideComponent(this.currIndex);
    }
  }
  hideComponent() {
    const state = this.state; 
    state['Your property'] = 'value';
    this.setState(state);
    console.log(this.currIndex);
    switch (this.currIndex) {
      case 1:
        this.setState({ creatorForm1: true });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        break;
      case 2:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: true });
        this.setState({ creatorForm3: false });
        break;
      case 3:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: true });
        break;
      default:
        return;
    }
  }

  render() {
    const { creatorForm1, creatorForm2, creatorForm3 } = this.state;
    var currIndex = 0;

    return (
      <div id="Creator">
        <div className="creator-body">
        <div className="heroText">
          <h1>Creator Portal</h1>
        </div>

        <div className="creatorForm">
          <div className="creatorFormTitle">
          </div>
          <div className="creatorFormBody">
            <form>
            {creatorForm1 && <CreatorForm1  ref={this._form1} setPoolName={this.SetPoolName} getPoolName={this.GetPoolName}/>}
            {creatorForm2 && <CreatorForm2  ref={this._form2}
             setPoolWidth={this.SetPoolWidth} getPoolWidth={this.GetPoolWidth}
             setPoolDepth={this.SetPoolDepth} getPoolDepth={this.GetPoolDepth}
             setPoolLength={this.SetPoolLength} getPoolLength={this.GetPoolLength}
            />}
            {creatorForm3 && <CreatorForm3 ref={this._form3} setPoolMaterial={this.SetPoolMaterial} getPoolMaterial={this.GetPoolMaterial}/>}
            </form>
          </div>

          <div className="creatorFormNavigation">
            <Button variant="contained" onClick={() => this.prev()}>
              Prev
            </Button>
            <Button variant="contained" onClick={() => this.next()}>
              Next
            </Button>
          </div>
    
        </div>
      </div>
      </div>

       
    );
  }
}

export default CreatorBody;
