import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios'
import TokenService from '.././services/TokenService';


export default class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  deleteRecipe(id) {
    axios({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      url: `http://localhost:3000/recipes/${id}`,
      method: 'DELETE'
    })
    .then(() => {
    console.log('Recipe DELETED!')
    })
    .catch(err => {
      console.log("there is an error in deleteRecipe:", err)
    })
  }

  // editRecipe(id) {
  //   axios({
  //     header: {
  //       'Content-type': 'application/json',
  //       Authorization: `Bearer ${TokenService.read()}`,
  //     },
  //     url: `http://localhost:3000/recipes/${id}`,
  //     method: 'PUT'
  //   })
  //   .then(() => {
  //     console.log('Recipe EDITED!')
  //   })
  //   .catch(err => {
  //     console.log("there is an error in editRecipe:", err)
  //   })
  // }


  render() {
    console.log("this is the mapped recipes!", this.props.recipesData);
    console.log("this is the mapped ingredients", this.props.ingredientsData);

    // WORKING map variables!!!!
    // const recipeNames = this.props.recipesData.map((recipe, index) => {
    //   return <div key={index}>{recipe.name}</div>;
    // });

    // const recipeInstructions = this.props.recipesData.map((recipe, index) => {
    //   return <div key={index}>{recipe.instructions}</div>;
    // });

    // const recipeImages = this.props.recipesData.map((recipe, index) =>{
    //   return <div key={index}>{recipe.image}</div>
    //   })
// 

// WORKING!!!!
    if (this.props.dataLoaded) {
      return (
        <div>
          <NavBar />
          <h3>This is the Recipes page!</h3>
          <p><Link to="/recipes/new">Add a New Recipe</Link></p>
          {/*{recipeNames}*/}
          {this.props.recipesData.map((recipe, index) => {
            return (
              <div key={index}>
                {recipe.name}
                <br />
                {/*<button onClick=
                {this.editRecipe.bind(this, recipe.id)}>Edit Recipe</button>*/}
                <button onClick=
                {this.deleteRecipe.bind(this, recipe.id)}>Delete Recipe</button>
                <img src={recipe.image} alt="" width="450" height="400"/>

              </div>
            );
          })}
        </div>
      );
    }
    return <div>LOADING!</div>;
  }
}


