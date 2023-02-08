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
import CreatorForm4 from "../Modules/CreatorForm4";
import CreatorForm5 from "../Modules/CreatorForm5";
import CreatorForm6 from "../Modules/CreatorForm6";
import CreatorForm7 from "../Modules/CreatorForm7";
import CreatorForm8 from "../Modules/CreatorForm8";

import "../SCSS/creator.scss";
// How to get next/prev working?
class CreatorBody extends React.Component {
  constructor(props) {
    super(props);
    this.currIndex = 1;
    this.maxIndex = 8; 
    this.state = {
      nextButtonText: "Next",
      name: "React",
      creatorForm1: true,
      creatorForm2: false,
      creatorForm3: false,
      _poolHasShallowEnd: false,
      _poolName: '',
      _poolWidth: 0,
      _poolDepth: 0,
      _poolLength: 0,
      _poolMaterial: "",
      _shallowDepth: "",
      _deepDepth: "",
      _poolSlant: "",
      _poolConcrete: "",
    
    };
    this._form1 = React.createRef(); 
    this._form2 = React.createRef(); 
    this._form3 = React.createRef(); 
    this.hideComponent = this.hideComponent.bind(this);
    this.SetPoolName = this.SetPoolName.bind(this); 
  }

/* Pool Slant Getters and Setters */

SetPoolSlant = (poolSlant) => {
  this.setState({_poolSlant: poolSlant}, function() {});
}

GetPoolSlant = () => {
  return this.state._poolSlant;
}

/* Pool Has Shallow End Setters and Getters */
GetPoolHasShallowEnd = () => {
  return this.state._poolHasShallowEnd; 

}

FlipPoolHasShallowEnd = () => {
  this.setState({_poolHasShallowEnd: !this.state._poolHasShallowEnd}, function() {});
}

/* Shallow Depth Getters And Setters*/
GetDeepDepth = () => {
  return this.state._deepDepth; 

}

SetDeepDepth = (deepDepth) => {
this.setState({_deepDepth: deepDepth}, function() {
 }); 
}


  /* Shallow Depth Getters And Setters*/
  GetShallowDepth = () => {
    return this.state._shallowDepth; 

  }

  SetShallowDepth = (shallowDepth) => {
  this.setState({_shallowDepth: shallowDepth}, function() {
   }); 
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
    if(this.currIndex < this.maxIndex){
      this.currIndex++;
      
      
      this.hideComponent(this.currIndex);
    }
  }
    

  
  
  hideComponent() {
    
    const state = this.state; 
    state['Your property'] = 'value';
    this.setState(state);
    switch (this.currIndex) {
      case 1:
        this.setState({ creatorForm1: true });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false});
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});
        this.setState({ nextButtonText: 'Next'});
        break;
      case 2:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: true });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});
        this.setState({ nextButtonText: 'Next'});

        break;
      case 3:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: true });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});

        this.setState({ nextButtonText: 'Next'});
        break;
      case 4:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: true });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});


        this.setState({ nextButtonText: 'Next'});
          break;

      case 5:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: true});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});


        this.setState({ nextButtonText: 'Next'});
              break;    

      case 6:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: true});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});

        this.setState({ nextButtonText: 'Next'});
        break;   
      case 7:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: true});
        this.setState({ creatorForm8: false});
        this.setState({ nextButtonText: 'Next'});
        break; 
      case 8:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: true});
        this.setState({ nextButtonText: 'Submit'});
        break; 

      default:
        return;
    }
  }

  render() {
    const { creatorForm1, creatorForm2, creatorForm3, creatorForm4, creatorForm5, creatorForm6, creatorForm7, creatorForm8 } = this.state;
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
             setShallowDepth={this.SetShallowDepth} getShallowDepth={this.GetShallowDepth}
             setDeepDepth={this.SetDeepDepth} getDeepDepth={this.GetDeepDepth}
             flipPoolHasShallowEnd={this.FlipPoolHasShallowEnd} getPoolHasShallowEnd={this.GetPoolHasShallowEnd}
             setPoolSlant={this.SetPoolSlant} getPoolSlant={this.GetPoolSlant}
            />}
            {creatorForm3 && <CreatorForm3 ref={this._form3} setPoolMaterial={this.SetPoolMaterial} getPoolMaterial={this.GetPoolMaterial}/>}
            {creatorForm4 && <CreatorForm4/>}
            {creatorForm5 && <CreatorForm5/>}
            {creatorForm6 && <CreatorForm6/>}
            {creatorForm7 && <CreatorForm7/>}
            {creatorForm8 && <CreatorForm8/>}
            </form>
          </div>

          <div className="creatorFormNavigation">
            <Button variant="contained" onClick={() => this.prev()}>
              Prev
            </Button>
            <Button variant="contained" onClick={() => this.next()}>
              {this.state.nextButtonText}
            </Button>
          </div>
    
        </div>
      </div>
      </div>

       
    );
  }
}

export default CreatorBody;
