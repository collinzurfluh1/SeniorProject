import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";

import "../SCSS/creator.scss";
import ConcreteOptions from "./ConcreteOptions.js";
import PlasterOptions from "./PlasterOptions.js";
import LinerOptions from "./LinerOptions.js";
import SteelWallOptions from "./SteelWallOptions.js";
import FiberGlassOptions from "./FiberGlassOptions";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
class CreatorForm3 extends React.Component {
  




  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        material: props.getPoolMaterial(),
        materialData: props.getPoolMaterialData(),
        basinLiner: props.getPoolMaterialData()['basinLiner'],
        materialBrand: props.getPoolMaterialData()["materialBrand"],
        plaster: props.getPoolMaterialData()["plaster"],
        rebar: props.getPoolMaterialData()["rebar"],
        width: props.getPoolMaterialData()["width"],
        length: props.getPoolMaterialData()["length"],
        depth: props.getPoolMaterialData()["shallowDepth"],
        lining: props.getPoolMaterialData()["lining"],
        wall: props.getPoolMaterialData()["wall"],
        shallowDepth: props.getPoolMaterialData()["shallowDepth"],
        deepDepth: props.getPoolMaterialData()["deepDepth"],
        slant: props.getPoolMaterialData()["slant"],
        shell: props.getPoolMaterialData()["shell"]
        
      };
      this.updateShell = this.updateShell.bind(this);
      this.updateSlant = this.updateSlant.bind(this);
      this.updateDeepDepth = this.updateDeepDepth.bind(this);
      this.updateShallowDepth = this.updateShallowDepth.bind(this);
      this.updateWall = this.updateWall.bind(this);
      this.updateLining = this.updateLining.bind(this);
      this.updateDepth = this.updateDepth.bind(this);
      this.updateLength = this.updateLength.bind(this);
      this.updateWidth = this.updateWidth.bind(this);
      this.updateRebar = this.updateRebar.bind(this);
      this.updatePlaster = this.updatePlaster.bind(this);
      this.updateGuniteBrand = this.updateGuniteBrand.bind(this); 
      this.updatePoolMaterial = this.updatePoolMaterial.bind(this); 
      this.updateBasinLiner = this.updateBasinLiner.bind(this); 


  }

  updateGuniteBrand(event){
      this.setState({materialBrand: event.target.value}); 
      this.props.setPoolMaterialData({
        "materialBrand": event.target.value, 
        "plaster": this.state.plaster,
        "rebar": this.state.rebar,  
        "shell": this.state.shell,
        "lining": this.state.lining,
        "wall": this.state.wall,
        "shallowDepth": this.state.shallowDepth,
        "deepDepth": this.state.deepDepth,
        "slant": this.state.slant,
        "width": this.state.width,
        "length": this.state.length,
      "basinLiner": this.state.basinLiner,
        "depth": this.state.depth
      });
  }

  updateBasinLiner(event){
    this.setState({basinLiner: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": this.state.length,
      "basinLiner": event.target.value,
      "depth": this.state.depth
    }); 
}


  updatePlaster(event){
    this.setState({plaster: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": event.target.value,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": this.state.length,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });

  }
  

  updateRebar(event){
    this.setState({rebar: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": event.target.value,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": this.state.length,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });
  }

  updateWidth(event){
    this.setState({width: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.slant,
      "width": event.target.value,
      "length": this.state.length,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });
  }
  updateLength(event){
    this.setState({length: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": event.target.value,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });
  }

  updateDepth(event){
    this.setState({depth: event.target.value}); 
    this.setState({shallowDepth: event.target.value});
    this.setState({deepDepth: event.target.value});
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": event.target.value,
      "deepDepth": event.target.value,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": this.state.length,
      "depth": event.target.value,
      "basinLiner": this.state.basinLiner

    });
  }

  updateLining(event){
    this.setState({lining: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": event.target.value,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": this.state.length,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });

  }


  updateWall(event){
    this.setState({wall: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": event.target.value,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": this.state.length,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });

  }

  updateShallowDepth(event){
    this.setState({shallowDepth: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": event.target.value,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": this.state.length,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });

  }
  updateDeepDepth(event){
    this.setState({deepDepth: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": event.target.value,
      "slant": this.state.slant,
      "width": this.state.width,
      "length": this.state.length,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });

  }
  updateSlant(event){
    this.setState({slant: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": this.state.shell,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": event.target.value,
      "width": this.state.width,
      "length": this.state.length,
      "depth": this.state.depth,
      "basinLiner": this.state.basinLiner

    });

  }
  updateShell(event){
    var shellValues = event.target[event.target.selectedIndex].id.split(',');

    var name = shellValues[0];
    var width = shellValues[1];
    var length = shellValues[2];
    var depth = shellValues[3];
    var deepDepth = shellValues[4];

    this.setState({shell: name}, function() {


    });
    this.setState({length: length}, function() {});
    this.setState({width: width}, function() {});
    this.setState({shallowDepth: depth}, function() {});
    this.setState({depth: depth}, function() {});
    this.setState({deepDepth: deepDepth}, function() {

    });

    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": name,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": depth,
      "deepDepth": deepDepth,
      "slant": this.state.shell,
      "width": width,
      "length": length,
      "depth": depth,
      "basinLiner": this.state.basinLiner

    });

    
  }

  
  updatePoolMaterial(event) {
    
    this.setState({ material: event.target.value });
    this.props.setPoolMaterial(event.target.value);


   
  }
  
  render() {
    return (

        <div id="Creator">
          <h1>Pool Material</h1>

         
          <div id="Creator">
          { this.state.material == "Gunite" && 
            <div id="guniteDiv">
            <div id="GuniteBrand" onChange={this.updateGuniteBrand}>
            <label for="gunite-brand" className="CreatorFormLabel">Choose A Concrete</label><br></br>
            <ConcreteOptions width={this.state.width} length={this.state.length} depth={this.state.depth} deepDepth={this.state.depth} floorType={"Flatbed"} basinType={"Gunite"}  concrete={this.state.materialBrand} onChange={this.updateGuniteBrand}/>
         
            </div>
            
            <label for="plaster" className="CreatorFormLabel">Plaster:</label><br></br>
            <PlasterOptions width={this.state.width} length={this.state.length} depth={this.state.depth}  basinType={"Gunite"} deepDepth={this.state.depth} floorType={"Flatbed"} plaster={this.state.plaster} onChange={this.updatePlaster}/>


          </div>
            


            
          }   
          { this.state.material == "Vinyl" && 
            <div id="Vinyl" >
           
            <label for="lining" className="CreatorFormLabel">Pool Lining:</label><br></br>
            <LinerOptions width={this.state.width} length={this.state.length} depth={this.state.shallowDepth} deepDepth={this.state.deepDepth}  basinType={"Vinyl"} floorType={this.state.slant} liner={this.state.lining} onChange={this.updateLining}/>
            <label for="" className="CreatorFormLabel">Steel Walls:</label><br></br>
            <SteelWallOptions width={this.state.width} length={this.state.length} depth={this.state.shallowDepth}  wall={this.state.wall} onChange={this.updateWall}/>
            </div>
            
          } 
         
          </div>

          </div>
      );
  
  }
}

export default CreatorForm3;
