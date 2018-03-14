import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default class Recipes extends Component {
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
                <button>Delete Recipe</button>
                <a href="http://www.google.com/"><img src={recipe.image} alt="" width="450" height="400"/></a>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>LOADING!</div>;
  }
}


