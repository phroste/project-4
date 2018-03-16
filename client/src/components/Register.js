import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.submit(data);
  }

  render() {
    // the onSubmit method is passed down to the UserForm as a prop
    return (
      <div className="login-bg">
        <div className="login-div">
          <p className="registration">Register Here</p>
          <UserForm className="registration" submit={this.onSubmit} />
          <p className="registration"><Link to="/"><button>Back Home</button></Link></p>
        </div>
      </div>
    )
  }
}
