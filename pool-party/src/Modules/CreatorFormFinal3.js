import * as React from "react";

import "../SCSS/creator.scss";

class CreatorFormFinal3 extends React.Component {
  constructor(props) {
    super(props);
    var pool = props.getPool(); 
    this.state = {
      chlorine: pool['chemicals']['chlorine'],
      cyaneuricAcid: pool['chemicals']['cyaneuricAcid'],
      shock: pool['chemicals']['shock']

       
      };

     

  }



  
  render() {
    return (
        <div id="Creator">
          <h1>{this.state.name}: Page 3</h1>
          <p>Pool Chlorine: {this.state.chlorine}</p>
          <p>Pool Cyaneuric Acid: {this.state.cyaneuricAcid}</p>
          <p>Pool Shock: {this.state.shock}</p>

        </div>
      );
  
  }
}

export default CreatorFormFinal3;
