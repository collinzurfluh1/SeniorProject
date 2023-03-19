import React, { Component } from 'react';
import axios from 'axios';

class SkimmerOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skimmer: [],
    };
  }

  async componentDidMount() {
    
    try {

      const response = await axios.get("http://localhost:4000/getAllSkimmerPrices", {
 
    
        params: {}
        
      });

      const data = response.data;
      this.setState({ skimmer: data });
      console.log(data.map((option) => option["Name"]));
    } catch (error) {
        alert(error);
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.skimmer} onChange={this.props.onChange}>
        <option value="none">Please Select</option>
          {this.state.skimmer.map((option) => (
            <option key={option["Name"]} value={option["Price"]}>
              {option["Name"]} $ {option["Price"]}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SkimmerOptions;