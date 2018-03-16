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
      recipes: [],
      ingredients: {ingredients: []},
      dataLoaded: false
    }
    this.getSingleRecipe = this.getSingleRecipe.bind(this);
    this.getSingleIngredient = this.getSingleIngredient.bind(this);

  }

  componentDidMount() {
    this.getSingleRecipe(this.props.match.params.id);
    this.getSingleIngredient(this.props.match.params.id);
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

  // getSingleRecipe(id) {
  //   axios({
  //     headers: {
  //       'Content-type': 'application/json',
  //       Authorization: `Bearer ${TokenService.read()}`,
  //     },
  //     url: `http://localhost:3000/recipes/${id}`,
  //     method: "GET"
  //   })
  //   .then(response => {
  //     this.setState({
  //       recipes: response.data,
  //       dataLoaded: true
  //     })
  //     console.log('getSingleRecipe response:', response.data.name)
  //   })
  //   .catch(err => {
  //     // handle errors
  //   });
  // }

  getSingleRecipe(id) {
    axios({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      url: `http://localhost:3000/recipes/${id}`,
      method: "GET"
    })
    .then(response => {
      this.setState(prevState => ({
        recipes: [...prevState.recipes, response.data],
        dataLoaded: true
      }))
      console.log('getSingleRecipe response:', response.data.name)
    })
    .catch(err => {
      // handle errors
    });
  }

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
      // console.log(JSON.parse(response.data.name))
      console.log('getSingleIngredient response:', response.data.name)
    })
    .catch(err => {
      // handle errors
    });
  }

  render() {
     // console.log('getSingleRecipe response:', this.getSingleRecipe)
    
    const showIngredients = this.state.ingredients.ingredients;
//     if (this.state.recipes.length !== 0) { 
//          console.log("this is recipes:", showRecipes)
// } else {
//   console.log('no recipes yet')
// }
    //  const mappedRecipes = showRecipes.map((recipe, index) => {
    //   return <div key={index}>{recipe.name}</div>;
    // });

    // const showIngredient = JSON.parse(showIngredients)
    if (this.state.dataLoaded) {
      const showRecipes = this.state.recipes;
      console.log("this is showrecipe:", showRecipes)
    return (
      <div> 
        <NavBar />
          {showRecipes.map((recipe, index) => {
            return (
              <div key={index}>
                <div className="rec-name">
                  <p>{recipe.name}</p>
                </div>
                <div className="rec-img">
                  <img src={recipe.image} alt="" width="450" height="400"/>  
                </div>
                <div className="rec-instructions">
                  {recipe.instructions}
                </div>
              </div>
            );
           })}
          <h3>Ingredients</h3>
           {showIngredients.map((ingredient, index) => {
            return (
              <div key={index}>
                <ol>
                  <ul className="ingredients">{ingredient}</ul>
                </ol>
              </div>
            );
          })}

        {/*<h1>{this.props.match.params.id}</h1>
        <button onClick={()=> this.getSingleIngredient(this.props.match.params.id)}>Show Ingredients</button>{*/}

        {/*<button onClick={()=> this.getSingleRecipe(this.props.match.params.id)}>Show Recipe</button>*/}

        <Link to="/recipes"><h3 className="recipes-home">Back to recipes list</h3></Link>

      </div>
    );
  }
     return <div>LOADING!</div>;
  }
}
