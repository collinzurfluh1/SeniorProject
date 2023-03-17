import * as React from "react";
import { Button } from "@mui/material";
import '../SCSS/poolitem.scss'
import axios from 'axios';



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
    console.log(props.poolProps);
    this.currIndex = 1;
    this.maxIndex = 10; 
    this.state = {
      username: props.username,
      nextButtonText: "Next",
      name: "React",
      creatorForm1: true,
      creatorForm2: false,
      creatorForm3: false,
      prevButton: false,
      nextButton: true,
      _poolHasShallowEnd: false,
      _poolName: props.poolProps?.title ?? null,
      _poolWidth: null,
      _poolDepth: null,
      _poolLength: null,
      _poolMaterial: null,
      _poolChemicals: {
        "chlorine": null,
        "cyaneuricAcid": null,
        "shock": null
      },
      _poolMaterialData:  {
        "materialBrand": null,
        "plaster": null,
        "rebar": null,  
        "shell": null,
        "lining": props.poolProps?.lining_type ?? null,
        "wall": null,
        "shallowDepth": props.poolProps?.depth_shallow ?? null,
        "deepDepth": props.poolProps?.depth_deep ?? null,
        "slant": props.poolProps?.slant_type ?? null,
        "width": props.poolProps?.width ?? null,
        "length": props.poolProps?.length ?? null,
        "depth": null,
        "basinLiner": null
    },
      _shallowDepth: null,
      _deepDepth: null,
      _poolSlant: null,
      _poolConcrete: null,
      _poolMaterialBrand: {
          "materialBrand": null,   
          "shell": null,
          "width": null,
          "length": null,

      },
      _poolSummerCover: props.poolProps?.cover2 ?? null,
      _poolWinterCover: props.poolProps?.covert1 ?? null,
      _poolPipe: props.poolProps?.pipe ?? null,
      _poolBasinLiner: null,
      _poolDrain: props.poolProps?.drain ?? null,
      _poolSkimmer: props.poolProps?.skimmer ?? null,
      _poolPump: props.poolProps?.pump ?? null,
      _poolLining: null,
      _poolMaterialObject: null

    
    };
    this.setState({username: props.username}, function() {});
    this._form1 = React.createRef(); 
    this._form2 = React.createRef(); 
    this._form3 = React.createRef(); 
    this.hideComponent = this.hideComponent.bind(this);
    this.SetPoolName = this.SetPoolName.bind(this);
    this.GetPool = this.GetPool.bind(this);
    this.GetPoolPump = this.GetPoolPump.bind(this); 
    this.GetPoolChemicals = this.GetPoolChemicals.bind(this); 
    this.GetPoolSkimmer = this.GetPoolSkimmer.bind(this); 
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
  
  
  UploadPool =  async (props) =>{
    alert("Pool Uploading");

      try {
          await axios.post('http://localhost:4000/savePools', {
            //Error because username is not defined
            owner: props.username,
            title: this.GetPool()["name"],
            original_creator: false,
            pulic: true,
            concrete: this.GetPool()['materialData']['materialBrand'],
            plaster: this.GetPool()['materialData']['plaster'],
            fiberglass_shell: this.GetPool()['materialData']['shell'],
            steel_wall: this.GetPool()['materialData']['wall'],
            basin_type: this.GetPool()['material'],
            length: this.GetPool()['materialData']['length'],
            width: this.GetPool()['materialData']['width'],
            depth_shallow: (this.GetPool()['materialData']['shallowDepth'] != null) ? this.GetPool()['materialData']['shallowDepth'] : this.GetPool()['materialData']['depth'],
            depth_deep: (this.GetPool()['materialData']['deepDepth'] != null) ? this.GetPool()['materialData']['deepDepth'] : this.GetPool()['materialData']['deepDepth'],
            slant_type: this.GetPool()['materialData']['slant'],
            lining_type: this.GetPool()['materialData']['lining'],
            cover1: this.GetPool()['winterCover'],
            cover2: this.GetPool()['summerCover'],
            piping: this.GetPool()['piping'],
            drain: this.GetPool()['drain'],
            skimmer:this.GetPool()['skimmer'],
            pump: this.GetPool()['pump'],
            //shock: this.GetPool()['chemicals']['chlorine'],
            //cyanuricAcid: this.GetPool()['chemicals']['cyaneuricAcid'],
            //chlorine: this.GetPool()['chemicals']['chlorine'],
            cost: 0,

          });
          alert("Your new pool is now saved!")
          window.location.href = '/my-pools';
      } catch (error) {
        alert("Sorry the pool was not able to be saved! Try again later");
      }

  }

  GetPoolChemicals = () => {
      return this.state._poolChemicals; 

  }

  SetPoolChemicals = (chemicals) =>{
      this.setState({_poolChemicals: chemicals});



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
        'materialData': this.GetPoolMaterialData(),
        'chemicals': this.GetPoolChemicals()
      }; 

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
    else if(this.currIndex == this.maxIndex){
     this.UploadPool(this.props);

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
        this.setState({ creatorFormSubmit2: false});
        this.setState({ creatorFormSubmit3: false});



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
        this.setState({ nextButtonText: 'Submit' });
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
            setPoolDrain={this.SetPoolDrain} getPoolDrain={this.GetPoolDrain}

            />}
            {creatorForm6 && <CreatorForm6
            setPoolChemicals={this.SetPoolChemicals} getPoolChemicals={this.GetPoolChemicals}


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
            getPoolMaterial={this.GetPoolMaterial}
            />}
            </form>
          </div>

          <div className="creatorFormNavigation">
            {prevButton && <Button variant="contained" onClick={() => this.prev()}>
              Prev
            </Button>}
            {nextButton && <Button variant="contained" id="nextButton" onClick={() => this.next()}>
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
