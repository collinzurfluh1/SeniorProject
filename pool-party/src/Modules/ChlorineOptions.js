import React, { Component } from 'react';
import axios from 'axios';

class ChlorineOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chlorine: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:4000/getAllChlorine", {
        params: { length: this.props.length, width: this.props.width, depth: this.props.depth, deepDepth: this.props.deepDepth, floorType: this.props.floorType }
      });
      const data = response.data;
      this.setState({ chlorine: data });
    } catch (error) {

    }
  }

  render() {
    return (
      <div>
        <select value={this.props.chlorine} onChange={this.props.onChange}>
        <option value="none">Please Select</option>
          {this.state.chlorine.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} {(option.price == null) ? '': '$' + option.price.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ChlorineOptions;