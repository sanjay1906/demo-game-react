import React, { Component, useState } from 'react';

export default class Map extends Component {
  render() {
    const Data = [
      {
        name: 'sanju',
        age: 23,
        div: 'a'
      },
      {
        name: 'kishan',
        age: 25,
        div: 'a'
      },
      {
        name: 'banker',
        age: 24,
        div: 'c'
      },
      {
        name: 'manav',
        age: 26,
        div: 'a'
      },
      {
        name: 'manav',
        age: 26,
        div: 'a'
      }
    ];
    const [sanju, helosanju] = useState(0);

    const RenderData = Data.map((sanjay, i) => {
      return (
        <div>
          <h1>{Data[i].name}</h1>

          <h1>{Data[i].age}</h1>

          <h1>{Data[i].div}</h1>
        </div>
      );
    });

    return (
      <div>
        {RenderData}
        <h1>{sanju}</h1>
        <button onClick={() => helosanju(sanju + 1)}>click here</button>
      </div>
    );
  }
}
