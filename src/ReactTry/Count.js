import React, { Component } from 'react';

const data = [
  {
    name: 'sanju',
    lastname: 'jadav'
  },
  {
    name: 'kishan',
    lastname: 'patel'
  },
  {
    name: 'banker',
    lastname: 'nitin'
  }
];


const render = data.map((sanju,i)=>{
        
})


export default class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, age: 25 };
  }

  Countplus = () => {
    this.setState({
      count: this.state.count + 1,
      age: 2
    });
    // this.setState(state => ({ age: state.age + 1 }));
  };
  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (this.props.color !== nextProps.color) {
  //       return true;
  //     }
  //     if (this.state.count !== nextState.count) {
  //       return true;
  //     }
  //     return false;
  //   }

  render() {
    const Home = props => {
      return (
        <div>
          <h1>{props.name}</h1>
          <h1>{props.lastname}</h1>
        </div>
      );
    };
    return (
      <div>
        <Home name='sanju' lastname='jadav' />
        <h1>{this.state.count}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={() => this.Countplus()}>count</button>
      </div>
    );
  }
}
