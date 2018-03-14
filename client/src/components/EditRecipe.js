import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import axios from 'axios';
import TokenService from '.././services/TokenService';


export default class EditRecipe extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  editRecipe(id) {
    axios({
      header: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      url: `http://localhost:3000/recipes/${id}`,
      method: 'PUT'
    })
    .then(() => {
      console.log('Recipe EDITED!')
    })
    .catch(err => {
      console.log("there is an error in editRecipe:", err)
    })
  }


  render() {
    return (
      <div>
      <NavBar />
        <form onSubmit={this.handleSubmit}>
          <h3>Edit this Recipe</h3>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" placeholder="Recipe name" onChange={this.handleChange} />
          </label>
          <label htmlFor="instructions">
            Instructions:
            <input type="text" name="instructions" placeholder="Enter instructions" onChange={this.handleChange} />
          </label>
          <label htmlFor="image">
            Image:
            <input type="text" name="image" placeholder="Enter an image URL" onChange={this.handleChange} />
          </label>
          <label htmlFor="user_id">
            User Id:
            <input type="text" name="user_id" placeholder="Enter a user id" onChange={this.handleChange} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )

  }
}
