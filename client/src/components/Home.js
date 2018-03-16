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
      <div className="login-bg">
        {/*<NavBar />*/}
        <div className="login-div">
          <p className="login-p">Create an Account</p>
          <Link to="/register"><button>Register</button></Link>
          <br />
          <p className="login-p">Already have an account?</p>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
    )
  }
}
