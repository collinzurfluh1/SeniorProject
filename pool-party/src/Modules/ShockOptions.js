import React, { Component } from 'react';
import axios from 'axios';

class ShockOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shock: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:4000/getAllShockPrices", {
        
        params: { length: this.props.length, width: this.props.width, depth: this.props.depth, basinType: this.props.basinType }
        
      });

      const data = response.data;
      this.setState({ shock: data });
    } catch (error) {
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.shock} onChange={this.props.onChange}>
        <option value="none">Please Select</option>
          {this.state.shock.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} {(option.price == null) ? '': '$' + option.price.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ShockOptions;