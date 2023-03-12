import * as React from "react";
import { Button } from "@mui/material";
import { createRoutesFromElements, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../SCSS/creator.scss";
import { resolveBreakpointValues } from "@mui/system/breakpoints";
// How to get next/prev working?

class CreatorForm4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        summerCover: props.getPoolSummerCover(),
        winterCover: props.getPoolWinterCover()

      };
      //this.writePoolWinterCovers = this.writePoolWinterCovers.bind(this);
      this.updatePoolSummerCover = this.updatePoolSummerCover.bind(this); 
      this.updatePoolWinterCover= this.updatePoolWinterCover.bind(this); 

  }
  
  async writePoolWinterCovers(){
   
    try {
        const response = await axios.get('http://localhost:4000/getWinterCovers');
        const winterCoverJsons = jwt_decode(response.data.accessToken);
        alert(winterCoverJsons);


     var winterCoverOutput = "<option value=\"cover1\">None</option>"; 
     for(const winterCoverJson of winterCoverJsons){
        var name = winterCoverJson.name; 
        winterCoverOutput += "<option value=" + name + ">"+  name + "</option>"; 

     }

    return winterCoverOutput; 
    } catch (error) {}
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

          <div className="CreatorFormLabel" onChange={this.updatePoolWinterCover}>
            
            <h1>Pool Covers</h1>
            <label for="winter-cover" class="CreatorFormLabel">Winter Cover:</label><br></br>
            <select name="winter-cover" value={this.state.winterCover} id="winter-cover">
            {this.winterCoverOutput}; 
            </select><br></br>
          </div>
          <div className="CreatorFormLabel" onChange={this.updatePoolSummerCover}>
            <label for="summer-cover" class="CreatorFormLabel">Summer Cover:</label><br></br>
            <select name="summer-cover" value={this.state.summerCover}  id="summer-cover">
            <option value="cover1">None</option>
            <option value="cover2">Cover 1</option>
            <option value="cover3">Cover 2</option>
             <option value="cover4">Cover 3</option>
            </select>
             
             
          </div>
        </div>
      );
  
  }
}

export default CreatorForm4;
