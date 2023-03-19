import React, { Component } from 'react';
import axios from 'axios';

class DrianOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drain: [],
    };
  }

  async componentDidMount() {
    
    try {

      const response = await axios.get("http://localhost:4000/getAllDrainPrices", {
 
    
        params: {}
        
      });

      const data = response.data;
      this.setState({ drain: data });
      console.log(data.map((option) => option["Name"]));
    } catch (error) {
        alert(error);
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.drain} onChange={this.props.onChange}>
        <option value="none">Please Select</option>
          {this.state.drain.map((option) => (
            <option key={option["Name"]} value={option["Name"]}>
              {option["Name"]} $ {option["Price"]}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default DrianOptions;