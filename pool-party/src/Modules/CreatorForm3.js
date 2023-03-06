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
        basinLiner: props.getPoolMaterialData()['basinLiner'],
        materialBrand: props.getPoolMaterialData()["materialBrand"],
        plaster: props.getPoolMaterialData()["plaster"],
        rebar: props.getPoolMaterialData()["rebar"],
        width: props.getPoolMaterialData()["width"],
        length: props.getPoolMaterialData()["length"],
        depth: props.getPoolMaterialData()["depth"],
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
      this.updateGunniteBrand = this.updateGunniteBrand.bind(this); 
      this.updatePoolMaterial = this.updatePoolMaterial.bind(this); 
      this.updateBasinLiner = this.updateBasinLiner.bind(this); 


  }

  updateGunniteBrand(event){
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
    this.setState({shell: event.target.value}); 
    this.props.setPoolMaterialData({
      "materialBrand": this.state.materialBrand, 
      "plaster": this.state.plaster,
      "rebar": this.state.rebar,  
      "shell": event.target.value,
      "lining": this.state.lining,
      "wall": this.state.wall,
      "shallowDepth": this.state.shallowDepth,
      "deepDepth": this.state.deepDepth,
      "slant": this.state.shell,
      "width": this.state.width,
      "length": this.state.length,
      "depth": this.state.depth,
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
          <div className="CreatorFormLabel" onChange={this.updatePoolMaterial}>
          <label for="pool-material" className="CreatorFormLabel">Pool Material:</label><br></br>
            <select name="pool-material" value={this.state.material} id="pool-material">
            <option value="None">Select a Value</option>
            <option value="Gunnite">Gunnite</option>
            <option value="Vinyl">Vinyl</option>
            <option value="Fiber Glass">Fiber Glass</option>
            </select><br></br>
            
          </div>
         
         
          <div id="Creator">
          { this.state.material == "Gunnite" && 
            <div id="gunniteDiv">
            <div id="GunniteBrand" onChange={this.updateGunniteBrand}>
            <label for="gunnite-brand" className="CreatorFormLabel">Choose A Concrete</label><br></br>
            <select name="concrete" value={this.state.materialBrand} id="pool-material">
            <option value="None">Select a Value</option>
            <option value="Concrete 1">Concrete 1</option>
            <option value="Concrete 2">Concrete 2</option>
            <option value="Concrete 3">Concrete 3</option>
            </select><br></br>
            
            </div>
            
            <label for="plaster" className="CreatorFormLabel">Plaster:</label><br></br>
            <select name="plaster" value={this.state.plaster} onChange={this.updatePlaster} id="plaster">
              <option value="None">Select a Value</option>
              <option value="plaster1">Plaster 1</option>
              <option value="plaster2">Plaster 2</option>
              <option value="plaster3">Plaster 3</option>
              <option value="plaster4">Plaster 4</option>
            </select><br></br>

          <div>
            <label className="CreatorFormLabel">Width: </label><br></br>
            <input type="number" defaultValue={this.state.width} onChange={this.updateWidth}></input><br></br>
            <label className="CreatorFormLabel">Length: </label><br></br>
            <input type="number" defaultValue={this.state.length} onChange={this.updateLength}></input><br></br>
            <label className="CreatorFormLabel">Depth: </label><br></br>
            <input type="number" defaultValue={this.state.depth} onChange={this.updateDepth}></input><br></br>    
            </div>
           
            </div>
            


            
          }   
          { this.state.material == "Vinyl" && 
            <div id="Vinyl" >
           
            <label for="lining" className="CreatorFormLabel">Pool Lining:</label><br></br>
            <select name="pool-lining"  value={this.state.lining} onChange={this.updateLining} id="pool-lining">
              <option value="pool-lining1">Pool Lining 1</option>
              <option value="pool-lining2">Pool Lining 2</option>
              <option value="pool-lining3">Pool Lining 3</option>
              <option value="pool-lining4">Pool Lining 4</option>
            </select><br></br>

            <label for="" className="CreatorFormLabel">Steel Walls:</label><br></br>
            <select name="steel-walls" value={this.state.wall} onChange={this.updateWall} id="steel-walls">
              <option value="steel-wals1">Steel Walls 1</option>
              <option value="steel-walls2">Steel Walls 2</option>
              <option value="steel-walls3">Steel Walls 3</option>
              <option value="steel-walls4">Steel Walls 4</option>
            </select><br></br>

 
 
              <label className="CreatorFormLabel">Width: </label><br></br>
            <input type="number" defaultValue={this.state.width} onChange={this.updateWidth}></input><br></br>
            <label className="CreatorFormLabel">Length: </label><br></br>
            <input type="number" defaultValue={this.state.length} onChange={this.updateLength}></input><br></br>
            <label className="CreatorFormLabel">Shallow Depth: </label><br></br>
            <input type="number" defaultValue={this.state.shallowDepth} onChange={this.updateShallowDepth}></input><br></br>
            <label className="CreatorFormLabel">Deep Depth: </label><br></br>
            <input type="number" defaultValue={this.state.deepDepth} onChange={this.updateDeepDepth}></input><br></br>
            <div  onChange={this.updateSlant}>
              <label className="CreatorFormLabel">Pool Slant: </label>
              <input type="radio" id="slant1" value="Diver" name="slant" defaultChecked={this.state.slant == "Diver"}></input>
              <label for="slant" className="CreatorFormLabel">Diver</label>
              <input type="radio" id="slant2" value="Slant" name="slant" defaultChecked={this.state.slant == "Slant"}></input>
              <label for="slant" className="CreatorFormLabel">Slant</label><br></br>
            </div>
            <label className="CreatorFormLabel"></label>


            </div>
            
          } 
          { this.state.material == "Fiber Glass" && 
            <div id="Fiber Glass" onChange={this.updateShell}>
              <input type="radio" id="fg1" name="fg" value="fg1" defaultChecked={this.state.shell=== "fg1"}></input>
              <label for="fg1">Fiber Glass 1</label><br></br>
              <input type="radio" id="fg2" name="fg" value="fg2" defaultChecked={this.state.shell=== "fg2"}></input>
              <label for="fg2">Fiber Glass 2</label><br></br>
              <input type="radio" id="fg3" name="fg" value="fg3" defaultChecked={this.state.shell === "fg3"}></input>
              <label for="fg3">Fiber Glass 3</label><br></br>
            
            </div>
          }     
          </div>

          </div>
      );
  
  }
}

export default CreatorForm3;
