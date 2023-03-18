import React, { Component } from 'react';
import axios from 'axios';

class SteelWallOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steelWalling: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:4000/getAllSteelWallingPrices", {
        
        params: { length: this.props.length, width: this.props.width, depth: this.props.depth, basinType: this.props.basinType}
        
      });

      const data = response.data;
      this.setState({ steelWalling: data });
    } catch (error) {
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.wall} onChange={this.props.onChange}>
        <option value="none">Please Select</option>
          {this.state.steelWalling.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} $ {option.price.toFixed(2)}
            </option>
          ))}        </select>
      </div>
    );
  }
}

export default SteelWallOptions;