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
      const response = await axios.get("http://localhost:4000/getAllFiberGlassShellPrices", {
        params: {}
      });
      const data = response.data;
      this.setState({ shell: data });
      alert(this.state.shell);
    } catch (error) {

    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default FiberGlassOptions;