import React, { Component } from 'react';
import axios from 'axios';

class PlasterOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plaster: [],
    };
  }

  async componentDidMount() {
    

    try {
      const response = await axios.get("http://localhost:4000/getAllPlasterPrices", {
        
        params: { length: "5", width: "5", depth: "5", deepDepth: this.props.deepDepth, floorType: "Slant", basinType: "Gunite"}
        
      });

      const data = response.data;
      this.setState({ plaster: data });
    } catch (error) {
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.plaster} onChange={this.props.onChange}>
          {this.state.plaster.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} $ {option.price.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default PlasterOptions;