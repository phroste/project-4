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
    this.recipePage = this.recipePage.bind(this);
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
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


  deleteConfirmation(e){
    // e.preventDefault();
    if ( 
      window.confirm (
        "Are you sure you want to delete this recipe?"
      )) 
    {
      // this.deleteRecipe()
    }
     console.log('delete confirmation!')
  }

  recipePage(recipeId){
    this.setState(this.props.history.push(`/recipes/${recipeId}`))
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
        <div className="recipes-page">
          <NavBar />
          {/*<h1>Recipes</h1>*/}
          {/*<h2><Link to="/recipes/new">Add a New Recipe</Link></h2>*/}
          {/*{recipeNames}*/}
          {this.props.recipesData.map((recipe, index) => {
            return (
              <div key={index}>
                <p className="recipe-name" 
                onClick={() => this.recipePage(recipe.id)}>{recipe.name}</p>
                <br />
                {/*<button onClick=
                {this.editRecipe.bind(this, recipe.id)}>Edit Recipe</button>*/}
                <img className="recipe-img" onClick={() => this.recipePage(recipe.id)} src={recipe.image} alt="" width="450" height="400"/>

                {/*<button className="delete-button" onClick=
                {this.deleteRecipe.bind(this, recipe.id)}>Delete Recipe</button>*/}
                {/*<button className="delete-button" 
                onClick={() => 
                {this.deleteRecipe(recipe.id)}}>Delete Recipe</button>*/}
                <button className="delete-button" 
                onClick={() => {this.deleteRecipe(recipe.id)}}>Delete Recipe</button>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>LOADING!</div>;
  }
}


