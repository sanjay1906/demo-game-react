import React, { Component } from 'react';
import 'tachyons';
import './demo.css';
class Demo extends Component {
  constructor() {
    super();
    this.state = {
      name: 'hello sanju im back',
      age: 20
    };
  }

  Changehere() {
    this.setState({
      name: 'hello there im sanju here',
      age: 50
    });
  }

  render() {
    return (
      <div>
        <div className='demo dib ma2 pa2 grow shadow-4'>
          <img
            width='100px'
            src='https://joeschmoe.io/api/v1/
hello'
            alt='sanjay'
          />
          {this.props.helo}
          <h1>
            hello there
            <h1 class='f-headline lh-solid'>Title</h1>
            <h1 class='10rem'>Title</h1>
            <span>
              hello<div>hello{this.props.name}</div>
            </span>
          </h1>
          <h1>{this.state.name}</h1>
          <h2>{this.state.age}</h2>
          <div>
            <div>hello{this.props.name}</div>
          </div>
        </div>

        <button onClick={() => this.Changehere()}>chenge</button>
      </div>
    );
  }
}
export default Demo;
