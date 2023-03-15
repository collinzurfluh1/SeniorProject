import React, { Component } from 'react';
import axios from 'axios';

class ConcreteOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concrete: [],
    };
  }

  async componentDidMount() {
    

    try {
      const response = await axios.get("http://localhost:4000/getAllConcretePrices", {
        
        params: { length: this.props.length, width: this.props.width, depth: this.props.depth, basinType: this.props.basinType}
        
      });

      const data = response.data;
      this.setState({ concrete: data });
    } catch (error) {
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.concrete} onChange={this.props.onChange}>
          {this.state.concrete.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} $ {option.price}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ConcreteOptions;