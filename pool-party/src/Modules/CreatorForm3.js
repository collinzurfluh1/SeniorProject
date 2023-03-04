import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
class CreatorForm3 extends React.Component {





  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        material: props.getPoolMaterial(),
        materialData: props.getPoolMaterialData(),
        plaster: props.getPoolMaterialData()["plaster"],
        gunniteBrand: props.getPoolMaterialData()["materialBrand"],
        GunniteMaterial: {
          "materialBrand": "",
          "rebar": "",
          "plaster": "",
          "width": 0,
          "length": 0
        },
    
      FiberGlassMaterial: {
          "materialBrand": ""
      },
    
      VinylMaterial: {
          "materialBrand": "",
          "poolLining": "",
          "steelWalls": "",
          "shallowDepth": "",
          "deepDepth": "",
          "slant": "",
          "width": 0,
          "length": 0
      },
        
      };
 
      this.updatePlaster = this.updatePlaster.bind(this);
      this.updateGunniteBrand = this.updateGunniteBrand.bind(this); 
      this.updatePoolMaterial = this.updatePoolMaterial.bind(this); 

  }

  updateGunniteBrand(event){

      this.setState({ gunniteBrand: event.target.value });
      this.props.setPoolMaterialData({
        "materialBrand": event.target.value,
       
      });
      

  }

  updatePlaster(event){
    this.setState({plaster: event.target.value });
    this.props.setPoolMaterialData({
      "plaster": event.target.value,
     
    });

  }

  updateGunnitePlaster(event){
      this.GunniteMaterial["plaster"] = event.target.value; 
  }


  updatePoolMaterial(event) {
    
    this.setState({ material: event.target.value });
    
    this.props.setPoolMaterial(event.target.value);

    switch(this.state.material){
      case("vinyl"):
        this.setState({ materialData: this.state.VinylMaterial });
        break; 
      case("gunnite"):
        this.setState({ materialData: this.state.GunniteMaterial });
        break; 
      case("fiberGlass"):
        this.setState({ materialData: this.state.FiberGlassMaterial});
        break; 
      
    }
   
  }
  
  render() {
    return (

        <div id="Creator">
          <h1>Pool Material</h1>
          <div className="CreatorFormLabel" onChange={this.updatePoolMaterial}>
          <label for="pool-material" className="CreatorFormLabel">Pool Material:</label><br></br>
            <select name="pool-material" value={this.state.material} id="pool-material">
            <option value="None">Select a Value</option>
            <option value="Gunnite">Gunnite</option>
            <option value="Vinyl">Vinyl</option>
            <option value="Fiber Glass">Fiber Glass</option>
            </select><br></br>
            
          </div>
          <div>


          { this.state.material == "Gunnite" && 
            <div id="gunniteDiv">
            <div id="GunniteBrand" onChange={this.updateGunniteBrand}>

            <label for="gunnite-brand" className="CreatorFormLabel">Choose Gunnite Brand</label><br></br>
            <select name="gunnite-brand" value={this.state.materialData["materialBrand"]} id="pool-material">
            <option value="None">Select a Value</option>
            <option value="Gunnite 1">Gunnite 1</option>
            <option value="Gunnite 2">Gunnite 2</option>
            <option value="Gunnite 3">Gunnite 3</option>
            </select><br></br>
            
            </div>
            <label for="plaster" className="CreatorFormLabel">Plaster:</label><br></br>
            <select name="plaster" value={this.state.materialData["plaster"]} onChange={this.updatePlaster} id="plaster">
              <option value="None">Select a Value</option>
              <option value="plaster1">Plaster 1</option>
              <option value="plaster2">Plaster 2</option>
              <option value="plaster3">Plaster 3</option>
              <option value="plaster4">Plaster 4</option>
            </select><br></br>
            <label for="rebar" className="CreatorFormLabel">Rebar:</label><br></br>
            <select name="rebar" id="rebar">
              <option value="rebar1">Rebar 1</option>
              <option value="rebar2">Rebar 2</option>
              <option value="rebar3">Rebar 3</option>
              <option value="rebar4">Rebar 4</option>
            </select><br></br>

            <label className="CreatorFormLabel">Width: </label><br></br>
            <input type="text" defaultValue={this.state.poolWidth} onChange={this.updatePoolWidth}></input><br></br>
            <label className="CreatorFormLabel">Length: </label><br></br>
            <input type="text" defaultValue={this.state.poolLength} onChange={this.updatePoolLength}></input><br></br>
            <label className="CreatorFormLabel">Depth: </label><br></br>
            <input type="text" defaultValue={this.state.shallowDepth} onChange={this.updateShallowDepth}></input><br></br>    
           
            </div>
            


            
          }   
          { this.state.material == "Vinyl" && 
            <div id="Vinyl" onChange={this.updatePoolMaterialBrand}>
              <input type="radio" id="vinyl1" name="vinyl" value="Vinyl 1" defaultChecked={this.state.materialBrand === "Vinyl 1"}></input>
              <label for="vinyl1">Vinyl 1</label><br></br>
              <input type="radio" id="vinyl2" name="vinyl" value="Vinyl 2" defaultChecked={this.state.materialBrand === "Vinyl 2"}></input>
              <label for="vinyl2">Vinyl 2</label><br></br>
              <input type="radio" id="vinyl3" name="vinyl" value="Vinyl 3" defaultChecked={this.state.materialBrand === "Vinyl 3"}></input>
              <label for="vinyl3">Vinyl 3</label><br></br>
              <label for="plaster" className="CreatorFormLabel">Pool Lining:</label><br></br>
            <select name="pool-lining" id="pool-lining">
              <option value="pool-lining1">Pool Lining 1</option>
              <option value="pool-lining2">Pool Lining 2</option>
              <option value="pool-lining3">Pool Lining 3</option>
              <option value="pool-lining4">Pool Lining 4</option>
            </select><br></br>
            <label for="" className="CreatorFormLabel">Steel Walls:</label><br></br>
            <select name="steel-walls" id="pool-lining">
              <option value="steel-wals1">Steel Walls 1</option>
              <option value="steel-walls2">Steel Walls 2</option>
              <option value="steel-walls3">Steel Walls 3</option>
              <option value="steel-walls4">Steel Walls 4</option>
            </select><br></br>
              <label className="CreatorFormLabel">Width: </label><br></br>
            <input type="text" defaultValue={this.state.poolWidth} onChange={this.updatePoolWidth}></input><br></br>
            <label className="CreatorFormLabel">Length: </label><br></br>
            <input type="text" defaultValue={this.state.poolLength} onChange={this.updatePoolLength}></input><br></br>
            <label className="CreatorFormLabel">Shallow Depth: </label><br></br>
            <input type="text" defaultValue={this.state.shallowDepth} onChange={this.updateShallowDepth}></input><br></br>
            <label className="CreatorFormLabel">Deep Depth: </label><br></br>
            <input type="text" defaultValue={this.state.deepDepth} onChange={this.updateDeepDepth}></input><br></br>
              <div  onChange={this.updatePoolSlant}>
              <label className="CreatorFormLabel">Pool Slant: </label>
              <input type="radio" id="slant1" value="Diver" name="slant" defaultChecked={this.state.poolSlant == "Diver"}></input>
              <label for="slant" className="CreatorFormLabel">Diver</label>
              <input type="radio" id="slant2" value="Slant" name="slant" defaultChecked={this.state.poolSlant == "Slant"}></input>
              <label for="slant" className="CreatorFormLabel">Slant</label><br></br>
              </div>
            </div>
            
          } 
          { this.state.material == "Fiber Glass" && 
            <div id="Fiber Glass" onChange={this.updatePoolMaterialBrand}>
              <input type="radio" id="fg1" name="fg" value="fg1" defaultChecked={this.state.materialBrand === "fg1"}></input>
              <label for="fg1">Fiber Glass 1</label><br></br>
              <input type="radio" id="fg2" name="fg" value="fg2" defaultChecked={this.state.materialBrand === "fg2"}></input>
              <label for="fg2">Fiber Glass 2</label><br></br>
              <input type="radio" id="fg3" name="fg" value="fg3" defaultChecked={this.state.materialBrand === "fg3"}></input>
              <label for="fg3">Fiber Glass 3</label><br></br>
            
            </div>
          }     
          </div>

          </div>
      );
  
  }
}

export default CreatorForm3;
