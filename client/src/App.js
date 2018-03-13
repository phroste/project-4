import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Recipes from './components/Recipes';
import TokenService from './services/TokenService';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      dataLoaded: false
    }

  this.getAllRecipes = this.getAllRecipes.bind(this);
  // this.getAllIngredients = this.getAllIngredients.bind(this);
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getAllRecipes();
    // this.getAllIngredients();
  }

  getAllRecipes() {
    axios({url: "http://localhost:3000/recipes"})
    .then(response => {
      this.setState({
        recipes: response.data,
        dataLoaded: true
      })
      console.log('data:', this.state.recipes);
    });
  }

  // getAllIngredients() {
  //   axios({url: "http://localhost:3000/ingredients"})
  //   .then(response => {
  //     this.setState({
  //       ingredients: response.data
  //     })
  //     console.log('data:', this.state.ingredients);
  //   });
  // }

  // handleChange(event) {
  //   const key = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [key]: value
  //   })
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const url = 'https//localhost:3000/recipes';
  //   const data = {
  //     recipe: {
  //       name: this.state.name,
  //       instructions: this.state.instructions,
  //       image: this.state.image
  //   }
  // };

  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  //   .then(response => response.json())
  //   .then(data => console.log("Successfully created a new recipe!", data));
  // }


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
    // {this.state.recipesData.map(el => {
    return (
      <div>
        <div>
        {/*<div data-solo={el.id} key={el.id}>
          <div className="recipes-div">
            <p>Name: {el.name}</p>
            <p>Instructions: {el.directions}</p>
            <p>Image: {el.image}</p>
          </div>*/}

          Weird button: <button onClick={this.authClick.bind(this)}>Weird Button</button>
          <p><button onClick={this.checkLogin.bind(this)}>Check If Logged In</button></p>
          <p><button onClick={this.logout.bind(this)}>Logout</button></p>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route 
              exact 
              path="/" 
              render={props => {
                return (
                  <Home 
                  {...props} 
                  recipesData={this.getAllRecipes}
                />
               );
              }}
            />*/}
            <Route exact path="/register" component={(props) => (
                <Register {...props} submit={this.register.bind(this)} />
            )} />

          <Route exact path="/login" component={(props) => (
            <Login {...props} submit={this.login.bind(this)} />
          )} />

          <Route exact path="/recipes" 
          render={props => {
            return (
              <Recipes
                {...props}
                recipesData={this.state.recipes}
                getAllRecipes={this.getAllRecipes}
                dataLoaded={this.state.dataLoaded}
                />
              );
            }}
          />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
