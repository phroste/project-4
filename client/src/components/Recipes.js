import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios'

export default class Recipes extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

   deleteRecipe(id) {
    axios({
      url: `http://localhost:3000/recipes/${id}`,
      method: 'DELETE'
    })
    .then(() => {
    console.log('Recipe DELETED!')
    })
    .catch(err => {
      console.log("there is an error in delete-recipe:", err)
    })
  }

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

  // deleteRecipe() {
  //   const recipeId = document.querySelector('#delete-recipe');
  //   const recipeAttribute = document.getAttribute(recipeId);
  //   axios({
  //     url: `http//localhost:3000/recipes/${recipeAttribute}`,
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: `Bearer ${TokenService.read()}`
  //     }
  //   })
  //   .then(response => {
  //     console.log('DELETE success!')
  //   })
  // }

 

{/*<button id='delete-recipe' data-delete={recipe.id}>Delete Recipe</button>*/}

// WORKING!!!!
    if (this.props.dataLoaded) {
      return (
        <div>
          <NavBar />
          <h3>This is the Recipes page!</h3>
          {/*{recipeNames}*/}
          {this.props.recipesData.map((recipe, index) => {
            return (
              <div key={index}>
                {/*{" "}*/}
                {recipe.name}
                <br />
                <button>Edit Recipe</button>
                <button onClick={this.deleteRecipe.bind(this, recipe.id)}>Delete Recipe</button>
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


