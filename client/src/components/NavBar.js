import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    TokenService.destroy();
    this.props.history.push('/');
  }

  render() {
    return (
        <div>
          <nav className="navbar">
            <Link to="/">Home </Link>
            <Link to="/recipes">Recipes </Link>
            <Link to="/profile">Profile </Link>
            <Link onClick={this.logout} to="/">
              Logout
            </Link>
          </nav>
        </div>
    );
  }
}