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
import CreatorForm9 from "../Modules/CreatorForm9";
import CreatorFormFinal from "../Modules/CreatorFormFinal";

import "../SCSS/creator.scss";

/*
When saving data 
1) Add the variable of the data ot be saved in the state
2) Add a getter and setter
3) Pass the functions to the component
4) Add variable with its set function to the state
5) Create an update function which both updates the component's state and also the global state
6) Use the update function 

*/
// How to get next/prev working?
class CreatorBody extends React.Component {
  constructor(props) {
    super(props);
    this.currIndex = 1;
    this.maxIndex = 10; 
    this.state = {
      nextButtonText: "Next",
      name: "React",
      creatorForm1: true,
      creatorForm2: false,
      creatorForm3: false,
      prevButton: false,
      nextButton: true,
      _poolHasShallowEnd: false,
      _poolName: '',
      _poolWidth: 0,
      _poolDepth: 0,
      _poolLength: 0,
      _poolMaterial: "",
      _poolMaterialData:  {
        "materialBrand": "", 
        "plaster": "",
        "rebar": "",  
        "shell": "",
        "lining": "",
        "wall": "",
        "shallowDepth": 0,
        "deepDepth": 0,
        "slant": "",
        "width": 0,
        "length": 0,
        "depth": 0

    },
      _shallowDepth: "",
      _deepDepth: "",
      _poolSlant: "",
      _poolConcrete: "",
      _poolMaterialBrand: {
          "materialBrand": "",   
          "shell": "",
          "width": 0,
          "length": 0

      },
      _poolSummerCover: "",
      _poolWinterCover: "",
      _poolPipe: "",
      _poolBasinLiner: "",
      _poolDrain: "",
      _poolSkimmer: "",
      _poolPump: "",
      _poolLining: "",
      _poolMaterialObject: null

    
    };
    this._form1 = React.createRef(); 
    this._form2 = React.createRef(); 
    this._form3 = React.createRef(); 
    this.hideComponent = this.hideComponent.bind(this);
    this.SetPoolName = this.SetPoolName.bind(this);
    this.GetPoolPump = this.GetPoolPump.bind(this); 
    this.GetPoolSkimmer = this.GetPoolSkimmer.bind(this); 
    this.GetPoolDrain = this.GetPoolDrain.bind(this); 
    this.GetPoolPipe = this.GetPoolPipe.bind(this); 
    this.GetPoolBasinLiner = this.GetPoolBasinLiner.bind(this); 
    this.GetPoolSummerCover = this.GetPoolSummerCover.bind(this); 
    this.GetPoolWinterCover = this.GetPoolWinterCover.bind(this); 
    this.GetPoolMaterialBrand= this.GetPoolMaterialBrand.bind(this); 
    this.GetPoolMaterial= this.GetPoolMaterial.bind(this); 
    this.GetPoolMaterialData = this.GetPoolMaterialData.bind(this); 
    this.GetShallowDepth = this.GetShallowDepth.bind(this); 
    this.GetPoolDepth = this.GetPoolDepth.bind(this); 
    this.GetDeepDepth = this.GetDeepDepth.bind(this); 
    this.GetPoolWidth = this.GetPoolWidth.bind(this); 
    this.GetPoolLength = this.GetPoolLength.bind(this); 
    this.GetPoolName = this.GetPoolName.bind(this); 

  }

  /* Pool Material Getters and Setters */
  GetPoolMaterialData = () => {
    return this.state._poolMaterialData; 
  
  }
  SetPoolMaterialData = (poolMaterialData) => {
    this.setState({_poolMaterialData: poolMaterialData}, function() {
  }); 
  }
  

/* Pool Lining Getters and Setters*/
SetPoolPump = (poolLining) => {
  this.setState({_poolLining: poolLining}, function() {});
}

GetPoolPump = () => {
  return this.state._poolLining;
}

/* Pool Pump Getters and Setters*/
SetPoolPump = (poolPump) => {
  this.setState({_poolPump: poolPump}, function() {});
}

GetPoolPump = () => {
  return this.state._poolPump;
}

/* Pool Drain Getters and Setters*/
SetPoolSkimmer = (poolSkimmer) => {
  this.setState({_poolSkimmer: poolSkimmer}, function() {});
}

GetPoolSkimmer= () => {
  return this.state._poolSkimmer;
}

/* Pool Drain Getters and Setters*/
SetPoolDrain = (poolDrain) => {
  this.setState({_poolDrain: poolDrain}, function() {});
}

GetPoolDrain= () => {
  return this.state._poolDrain;
}

/* Pool  Basin Liners Getters and Setters*/
SetPoolBasinLiner = (poolBasinLiner) => {
  this.setState({_poolBasinLiner: poolBasinLiner}, function() {});
}

GetPoolBasinLiner= () => {
  return this.state._poolBasinLiner;
}

/* Pool  Piping Getters and Setters*/
SetPoolPipe = (poolPipe) => {
  this.setState({_poolPipe: poolPipe}, function() {});
}

GetPoolPipe = () => {
  return this.state._poolPipe;
}

/* Pool  Getters and Setters*/
SetPoolSummerCover = (poolSummerCover) => {
  this.setState({_poolSummerCover: poolSummerCover}, function() {});
}

GetPoolSummerCover = () => {
  return this.state._poolSummerCover;
}

/* Pool Winter Cover Getters and Setters*/
SetPoolWinterCover = (poolWinterCover) => {
  this.setState({_poolWinterCover: poolWinterCover}, function() {});
}
GetPoolWinterCover = () => {
  return this.state._poolWinterCover;
}
GetPoolMaterialBrand = () => {
  return this.state._poolMaterialBrand;
}


/* Pool Material Brand Getters and Setters*/
SetPoolMaterialBrand = (poolMaterialBrand) => {
  this.setState({_poolMaterialBrand: poolMaterialBrand}, function() {});
}

GetPoolMaterialBrand = () => {
  return this.state._poolMaterialBrand;
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

  GetPool = () => {
      return {
        'name': this.GetPoolName(),
        'width': this.GetPoolWidth(),
        'length': this.GetPoolLength(),
        'depth': this.GetPoolDepth(),
        'shallowDepth': this.GetShallowDepth(),
        'deepDepth': this.GetDeepDepth(),
        'slant': this.GetPoolSlant(),
        'material': this.GetPoolMaterial(),
        'materialBrand': this.GetPoolMaterialBrand(),
        'summerCover': this.GetPoolSummerCover(),
        'winterCover': this.GetPoolWinterCover(),
        'pipe': this.GetPoolPipe(),
        'basinLiner': this.GetPoolBasinLiner(),
        'drain': this.GetPoolDrain(),
        'skimmer': this.GetPoolSkimmer(),
        'pump': this.GetPoolPump(),
        'materialData': this.GetPoolMaterialData()
      }; 

  }
  SetPool = (pool) =>{
      //this.SetPoolMaterial(pool.material);
      //this.SetPoolMaterialBrand(pool.poolMaterialBrand);  


  }

  prev() {
    if(this.currIndex > 1){
      this.currIndex--;
      if(this.currIndex == 2){
        this.currIndex--; 
      }
      this.hideComponent(this.currIndex);
    }
  }

  next() {
    if(this.currIndex < this.maxIndex){
      this.currIndex++;
      if(this.currIndex == 2){

        this.currIndex++; 
      }
      
      
      this.hideComponent(this.currIndex);
    }
  }
    

  
  
  hideComponent() {
    
    const state = this.state; 
    this.setState(state);
    switch (this.currIndex) {
      case 1:
        this.setState({ prevButton: false });
        this.setState({ nextButton: true });
        this.setState({ creatorForm1: true });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false});
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});
        this.setState({ creatorForm9: false});
        this.setState({ creatorFormSubmit: false});


        this.setState({ nextButtonText: 'Next'});
        break;
      case 2:
        this.setState({ prevButton: true });
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: true });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});
        this.setState({ creatorForm9: false});

        this.setState({ nextButtonText: 'Next'});

        break;
      case 3:
        this.setState({ prevButton: true });
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: true });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});
        this.setState({ creatorForm9: false});


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
        this.setState({ creatorForm9: false});



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
        this.setState({ creatorForm9: false});



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
        this.setState({ creatorForm9: false});


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
        this.setState({ creatorForm9: false});

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
        this.setState({ creatorForm9: false});
        this.setState({ nextButtonText: 'Next'});
        break; 
     case 9:
       this.setState({ creatorForm1: false });
       this.setState({ creatorForm2: false });
       this.setState({ creatorForm3: false });
       this.setState({ creatorForm4: false });
       this.setState({ creatorForm5: false});
       this.setState({ creatorForm6: false});
       this.setState({ creatorForm7: false});
       this.setState({ creatorForm8: false});
       this.setState({ creatorForm9: true});
       this.setState({ creatorFormSubmit: false});
       this.setState({ nextButtonText: 'Submit'});
       break; 

       case 10:
        this.setState({ creatorForm1: false });
        this.setState({ creatorForm2: false });
        this.setState({ creatorForm3: false });
        this.setState({ creatorForm4: false });
        this.setState({ creatorForm5: false});
        this.setState({ creatorForm6: false});
        this.setState({ creatorForm7: false});
        this.setState({ creatorForm8: false});
        this.setState({ creatorForm9: false});
        this.setState({ prevButton: false });
        this.setState({ nextButton: false});
        this.setState({ creatorFormSubmit: true});
        break;

      default:
       this.setState({ creatorForm1: false });
       this.setState({ creatorForm2: false });
       this.setState({ creatorForm3: false });
       this.setState({ creatorForm4: false });
       this.setState({ creatorForm5: false});
       this.setState({ creatorForm6: false});
       this.setState({ creatorForm7: false});
       this.setState({ creatorForm8: false});
       this.setState({ creatorForm9: false});
       this.setState({ creatorFormSubmit: true});
       this.setState({ nextButtonText: 'Submit'});
        return;
    }
  }

  render() {
    const { prevButton, nextButton, creatorForm1, creatorForm2, creatorForm3, creatorForm4, creatorForm5, creatorForm6, creatorForm7, creatorForm8, creatorForm9, creatorFormSubmit } = this.state;
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
            {creatorForm3 && <CreatorForm3 ref={this._form3} 
              getPoolMaterialData={this.GetPoolMaterialData}
              setPoolMaterialData={this.SetPoolMaterialData}
              getPoolMaterial={this.GetPoolMaterial}
              setPoolMaterial={this.SetPoolMaterial}
            
            />}
            {creatorForm4 && <CreatorForm4
            setPoolWinterCover={this.SetPoolWinterCover} getPoolWinterCover={this.GetPoolWinterCover}
            setPoolSummerCover={this.SetPoolSummerCover} getPoolSummerCover={this.GetPoolSummerCover}
            />}
            {creatorForm5 && <CreatorForm5
            setPoolPipe={this.SetPoolPipe} getPoolPipe={this.GetPoolPipe}
            />}
            {creatorForm6 && <CreatorForm6
            setPoolBasinLiner={this.SetPoolBasinLiner} getPoolBasinLiner={this.GetPoolBasinLiner}

            />}
            {creatorForm7 && <CreatorForm7
            setPoolDrain={this.SetPoolDrain} getPoolDrain={this.GetPoolDrain}
            />}
            {creatorForm8 && <CreatorForm8
            setPoolSkimmer={this.SetPoolSkimmer} getPoolSkimmer={this.GetPoolSkimmer}
            
            />}
            {creatorForm9 && <CreatorForm9
            setPoolPump={this.SetPoolPump} getPoolPump={this.GetPoolPump}
            />}
            {creatorFormSubmit && <CreatorFormFinal
            getPool={this.GetPool}
            />}
            </form>
          </div>

          <div className="creatorFormNavigation">
            {prevButton && <Button variant="contained" onClick={() => this.prev()}>
              Prev
            </Button>}
            {nextButton && <Button variant="contained" onClick={() => this.next()}>
              {this.state.nextButtonText}
            </Button>}
          </div>
    
        </div>
      </div>
      </div>

       
    );
  }
}

export default CreatorBody;
