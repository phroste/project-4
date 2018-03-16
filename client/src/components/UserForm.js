import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // preventDefault and lift state back up to the parent
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  // update form state
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="login-name">Name
          <input 
            type="text" 
            name="username" 
            className="login-input"
            onChange={this.handleChange}
            value={this.state.username} />
        </label>
        <label className="login-name">Password
          <input 
            type="password" 
            name="password" 
            className="login-input"
            onChange={this.handleChange}
            value={this.state.password} />
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}
