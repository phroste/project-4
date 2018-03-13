import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default class Recipes extends Component {
  render() {
    console.log("this is the mapped recipes!", this.props.recipesData);

    //     return(
    //       {this.props.recipesData.map(el => {
    //       <div data-solo={el.id} key={el.id}>
    //       <h3>This is the Recipes Page!</h3>
    //         <p>Name: {el.name}</p>
    //         <p>Instructions: {el.instructions}</p>
    //         <p>Image: {el.image}</p>
    //       </div>
    //       )
    //   })}
    // }

    // {this.props.recipesData.map((recipe, i)=> {
    //           <div key={i}>
    //           {recipe.name}
    //           </div>
    //          })}

    // WORKING map variables!!!!
    const recipeNames = this.props.recipesData.map((recipe, index) => {
      return <div key={index}>{recipe.name}</div>;
    });

    const recipeInstructions = this.props.recipesData.map((recipe, index) => {
      return <div key={index}>{recipe.instructions}</div>;
    });

    const recipeImages = this.props.recipesData.map((recipe, index) =>{
      return <div key={index}>{recipe.image}</div>
      })

// WORKING!!!!
    if (this.props.dataLoaded) {
      return (
        <div>
          <h3>This is the Recipes page!</h3>
          {recipeNames}
          {recipeInstructions}
          {this.props.recipesData.map((recipe, index) => {
            return (
              <div key={index}>
                {" "}
                <img src={recipe.image} alt="" width="420" height="400"/>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>LOADING!</div>;
  }
}

// if (this.props.dataLoaded) {
//   return (
//     {this.props.recipesData.map((recipe, index) => {
//       <div key={index}>
//         {recipe.name}
//         <img src={recipe.image} alt="" width="420" height="400"/>
//       </div>
//     })
//   )}
//   return 
//   <div>LOADING!</div>
// }
// }
// renderRecipes(arr) {
//   return arr.map((el, index) => {
//     return (
//       <div key={index}
//       )
//   })
// }
