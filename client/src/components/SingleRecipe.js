import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import NewRecipe from "./NewRecipe";
import Recipes from "./Recipes";
import NavBar from "./NavBar"
import axios from 'axios';
import TokenService from '.././services/TokenService';


export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      dataLoaded: false
    }
    // this.recipeListItem = this.recipeListItem.bind(this);
    this.getSingleIngredient = this.getSingleIngredient.bind(this);
  }

  // recipeListItem(recipeDatum, index) {
  //   return (
  //     <recipeItem
  //       recipeDatum={recipeDatum}
  //       index={index}
  //       getAllRecipes={this.props.getAllRecipes}
  //       getAllIngredients={this.props.getAllIngredients}
  //     />
  //   );
  // }

  getSingleIngredient(id) {
    axios({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      url: `http://localhost:3000/ingredients/${id}`,
      method: "GET"
    })
    .then(response => {
      this.setState({
        ingredients: response.data,
        dataLoaded: true
      })
      console.log('getSingleIngredient button clicked!')
      console.log(JSON.parse(response.data.name))
    })
    .catch(err => {
      // handle errors
    });
  }

  render() {
    return (
      <div> 
        <NavBar />
           {this.getSingleIngredient.response.data.map((ingredient, index) => {
            return (
              <div key={index}>
                <ol>{ingredient.name}</ol>
              </div>
            );
          })}

        <h1>{this.props.match.params.id}</h1>
        <button onClick={()=> this.getSingleIngredient(this.props.match.params.id)}>Ingredient</button>

        <Link to="/recipes">Back to recipes list</Link>

      </div>
    );
  }
}
