import React, { Component } from 'react';
import axios from 'axios';

class WinterCoverOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winterCover: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:4000/getAllWinterCoverPrices", {
        
        params: { length: this.props.length, width: this.props.width}
        
      });

      const data = response.data;
      this.setState({ winterCover: data });
    } catch (error) {
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.winterCover} onChange={this.props.onChange}>
        <option value="none">Please Select</option>
          {this.state.winterCover.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} {(option.price == null) ? '': '$' + option.price.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default WinterCoverOptions;