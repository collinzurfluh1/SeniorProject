import React, { Component } from 'react';
import axios from 'axios';

class FiberGlassOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shell: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:4000/getAllFiberGlassShellPrices");
      const data = response.data;
      this.setState({ shell: data });
    } catch (error) {

    }
  }

  render() {
    return (
      <div>
        <select value={this.props.shell} onChange={this.props.onChange}>
        <option value="none">Please Select</option>
          {this.state.shell.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} $ {option.cost}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default FiberGlassOptions;