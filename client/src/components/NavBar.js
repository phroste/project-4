import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/TokenService';
import logo from '.././logo.svg';


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
        <div className="App">
          <nav className="navbar">
            <h2>React Recipes</h2>
            <Link to="/">Home </Link>
            <Link to="/recipes">Recipes </Link>
            <Link to="/recipes/new">Add Recipes </Link>
            <Link onClick={this.logout} to="/">
              Logout
            </Link>
          </nav>
        </div>
    );
  }
}