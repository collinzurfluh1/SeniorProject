import React, { Component } from 'react';
import axios from 'axios';

class LinerOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liner: [],
    };
  }

  async componentDidMount() {
    

    try {
      const response = await axios.get("http://localhost:4000/getAllPoolLinerPrices", {
        
        params: { length: this.props.length, width: this.props.width, depth: this.props.depth, deepDepth: this.props.deepDepth, floorType: this.props.floorType, basinType: this.props.basinType }
        
      });

      const data = response.data;
      this.setState({ liner: data });
    } catch (error) {
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.liner} onChange={this.props.onChange}>
          <option value="none">Please Select</option>
          {this.state.liner.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} $ {(option.price == null) ? '': '$' + option.price.toFixed(2) }
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default LinerOptions;