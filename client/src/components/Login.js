import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(`handling submit: ${data}`);
    this.props.submit(data);
    this.props.history.push('/recipes');
  }


  render() {
    return (
      <div className="login-bg">
        <div className="login-div">
          <p className="login-p">Welcome to React Recipes!</p>
          <UserForm submit={this.onSubmit} />
          <p><Link to="/"><button>Back Home</button></Link></p>
        </div>
      </div>
    )
  }
}
