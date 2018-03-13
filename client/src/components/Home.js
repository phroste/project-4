import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>This is the homepage!</div>
        <Link to="/register"><button>Register</button></Link>
        <br />
        <Link to="/login"><button>Login</button></Link>
      </div>
    )
  }
}
