import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Recipes from './components/Recipes';
import NewRecipe from './components/NewRecipe';
import SingleRecipe from './components/SingleRecipe';
import EditRecipe from './components/EditRecipe';
import TokenService from './services/TokenService';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ingredients: [],
      singleRecipe: [],
      dataLoaded: false
    }

  this.getAllRecipes = this.getAllRecipes.bind(this);
  this.getAllIngredients = this.getAllIngredients.bind(this);
  }

  componentDidMount() {
    this.getAllRecipes();
    this.getAllIngredients();
  }

  getAllRecipes() {
    axios({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      url: "http://localhost:3000/recipes",
      method: "GET"
    })
    .then(response => {
      this.setState({
        recipes: response.data,
        dataLoaded: true
      })
    })
    .catch(err => {
      // handle errors
    });
  }


  getAllIngredients() {
    axios({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TokenService.read()}`,
      },
      url: "http://localhost:3000/ingredients",
      method: "GET"
    })
    .then(response => {
      this.setState({
        ingredients: response.data,
        dataLoaded: true
      })
    })
    .catch(err => {
      // handle errors
    });
  }




  // api call for creating a new user
  // note that TokenService.save with the token is called
  // may also want to setState with the user data and
  // whether or not the user is logged in

  register(data) {
    axios('http://localhost:3000/users/', {
      method: "POST",
      data
    }).then(response => {
      TokenService.save(response.data.token)
    })
    .catch(err => console.log(`err: ${err}`));
  }

  // same as above except route is login
  // as above, we are saving the token locally using
  // the TokenService
  login(data) {
    axios('http://localhost:3000/users/login', {
      method: "POST",
      data
    }).then(response => {
      TokenService.save(response.data.token);
    })
    .catch(err => console.log(`err: ${err}`));
  }

  // calling a restricted route on the server
  // the important part is setting the Authorization header
  // with the token retrieved from the TokenService
  authClick(ev) {
    ev.preventDefault();
    axios('http://localhost:3000/recipes', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(response => console.log(response))
    .catch(err => console.log(err));
  }

  // delete the token on user logout
  logout(ev) {
    ev.preventDefault();
    TokenService.destroy();
  }

  // checks to see if user is logged in 
  checkLogin() {
    axios('http://localhost:3000/isLoggedIn', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(response => console.log(response))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/register" component={(props) => (
                <Register {...props} submit={this.register.bind(this)} />
            )} />

          <Route exact path="/login" component={(props) => (
            <Login {...props} submit={this.login.bind(this)} />
          )} />

          <Route exact path="/recipes" component={(props) => (
              <Recipes {...props} 
                recipesData={this.state.recipes}
                ingredientsData={this.state.ingredients}
                dataLoaded={this.state.dataLoaded}
              />
            )}
          />

          <Route exact path="/recipes/new"
            render={props => {
              return (
                <NewRecipe 
                  {...props}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                />
              );
            }}
          />

          <Route exact path="/recipes/:id"
            render={props => {
              return (
                <SingleRecipe 
                  {...props} 
                  getAllRecipes={this.state.recipes}
                  getAllIngredients={this.state.ingredients} 
                />
              );
            }}
          />

          <Route exact path="/recipes/:id/edit" 
          component={EditRecipe}/>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
