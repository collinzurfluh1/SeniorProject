import React, { Component } from 'react';
import axios from 'axios';

class DrianOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pipe: [],
    };
  }

  async componentDidMount() {
    
    try {

      const response = await axios.get("http://localhost:4000/getAllPipesPrices", {
 
    
        params: { length: this.props.length, width: this.props.width, depth: this.props.depth}
        
      });

      const data = response.data;
      this.setState({ pipe: data });
    } catch (error) {
        alert(error);
    }
  }

  render() {
    return (
      <div>
        <select value={this.props.pipe} onChange={this.props.onChange}>
          {this.state.pipe.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name} $ {option.price.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default DrianOptions;