import React, { Component } from 'react';
import axios from 'axios';

class CyaneuricAcidOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cyanuricAcid: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:4000/getAllCyanuricAcidPrices", {
        params: { length: this.props.length, width: this.props.width, depth: this.props.depth, deepDepth: this.props.deepDepth, basinType: this.props.basinType }
      });
      const data = response.data;
      this.setState({ cyanuricAcid: data });
    } catch (error) {

    }
  }

  render() {
    return (
      <div>
        <select value={this.props.cyanuricAcid} onChange={this.props.onChange}>
        <option value="none">Please Select</option>
          {this.state.cyanuricAcid.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} {(option.price == null) ? '': '$' + option.price.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CyaneuricAcidOptions;