import * as React from "react";


import "../SCSS/creator.scss";
// How to get next/prev working?

class CreatorForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "React",
        value: props.getPoolName(),
      
      };
      this.updatePoolName = this.updatePoolName.bind(this); 
      

  }
  updatePoolName(event){
    
    this.props.setPoolName(event.target.value);

  }



  
  render() {
    return (
      <div id="Creator">
      <div className="CreatorFormTitle">
        <h2>Please Name Your Pool</h2>
        <label className="CreatorFormLabel">Pool Name: </label><br></br>
        <input type="text" placeholder="Pool Name" defaultValue={this.state.value} onChange={this.updatePoolName}></input><br></br>
        
      </div>
    </div>
       
      );
  
  }
}

export default CreatorForm1;
