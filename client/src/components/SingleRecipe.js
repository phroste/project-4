import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

export default class SingleRecipe extends Component {

  getSingleRecipe() {
    axios({
      url: "http://localhost:3000/recipes/:id}",
      method: "GET"
    })
    .then(response => {
      this.setState({
      singleRecipe: response.data,
      dataLoaded: true
    })
  })
    .catch(err => {
      // handle errors
    });
  }

  render() {
    return (
      <div>
      <NavBar />
        <h3>Hello from the SingleRecipe Component!</h3>
        <Link to="/recipes/1/edit"><button>Edit Recipe</button></Link>
      </div>
    )
  }
}

    