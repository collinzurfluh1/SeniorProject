import React, { Component } from 'react';
import axios from 'axios';

class PipeOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pipe: [],
    };
  }

  async componentDidMount() {
    
    try {

      const response = await axios.get("http://localhost:4000/getAllPipesPrices", {
 
    
        params: { length: this.props.length, width: this.props.width, deepDepth: this.props.depth}
        
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
        <option value="none">Please Select</option>
          {this.state.pipe.map((option) => (
            <option key={option.type} value={option.type}>
              {option.type} $ {option.price.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default PipeOptions;