import React, { Component } from 'react';
import NavBar from "./NavBar";
import axios from 'axios';
import TokenService from '.././services/TokenService';

export default class NewRecipe extends Component {

  constructor(props) {
    super(props)
      this.state = {
        name: '',
        instructions: '',
        image: '',
        user_id: ''    
      }
    // this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    const value = event.target.value;
    // console.log(value)
    this.setState({
      name: value
    });
  }

  handleInstructionsChange(event) {
    const value = event.target.value;
    // console.log(value)
    this.setState({
      instructions: value
    });
  }

  handleImageChange(event) {
    const value = event.target.value;
    // console.log(value)
    this.setState({
      image: value
    });
  }

  handleUserIdChange(event) {
    const value = event.target.value;
    // console.log(value)
    this.setState({
      user_id: value
    });
  }

  // post method to create a new recipe 
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      recipe: {
        name: this.state.name,
        instructions: this.state.instructions,
        image: this.state.image,
        user_id: this.state.user_id
      }
    };
    console.log('this is a new recipe!', data);
    axios('http://localhost:3000/recipes', {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      method: 'POST',
      data
    }).then(response => {
      console.log('POST success!, response.data:', response.data);
      this.props.history.push('/recipes');
    });
  }

  render() {
    return (
      <div>
      <NavBar />
      <h3>Hello from NewRecipe Component!</h3>
        <form onSubmit={this.handleSubmit}>
            <h3>Add a New Recipe</h3>
            <label htmlFor="name">
              Name:
              <input type="text" name="name" placeholder="Recipe name" onChange={this.handleNameChange.bind(this)} />
            </label>
            <label htmlFor="instructions">
              Instructions:
              <input type="text" name="instructions" placeholder="Enter instructions" onChange={this.handleInstructionsChange.bind(this)} />
            </label>
            <label htmlFor="image">
              Image:
              <input type="text" name="image" placeholder="Enter an image URL" onChange={this.handleImageChange.bind(this)} />
            </label>
            <label htmlFor="user_id">
              User Id:
              <input type="text" name="user_id" placeholder="Enter a user id" onChange={this.handleUserIdChange.bind(this)} />
            </label>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}