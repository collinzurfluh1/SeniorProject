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
        
        params: { length: this.props.length, width: this.props.width, depth: this.props.depth, deepDepth: this.props.depth, floorType: "Flatbed", basinType: "Gunite"}
        
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
        <option value="none">Please Select</option>
          {this.state.plaster.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} {(option.price == null) ? '': '$' + option.price.toFixed(2) }
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default PlasterOptions;