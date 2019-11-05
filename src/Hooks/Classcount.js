import React, { Component } from 'react';

export default class Classcount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: 'sanju'
    };
  }
  countFun = () => {
    this.setState({
      count: this.state.count + 1,
      name: 'kishan'
    });
  };

  componentDidMount() {
    document.title = `here ${this.state.name}`;
  }
  componentDidUpdate() {
    document.title = `here ${this.state.name}`;
  }

  render() {
    return (
      <div>
        <h2 />
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>

        <button onClick={this.countFun}>click</button>
      </div>
    );
  }
}
