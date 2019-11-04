import React, { Component } from 'react';
import './ReactRouter.css';
import { Link } from 'react-router-dom';
export default class ReactRouter extends Component {
  render() {
    return (
      <div className='menuclass'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/content'>Content</Link>
          </li>
        </ul>
      </div>
    );
  }
}
