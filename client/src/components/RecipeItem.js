import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class RecipeItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const recipeDatum = this.props.recipeDatum;
    const index = this.props.index;
    const name = recipeDatum.name,
      image = recipeDatum.category,
      instructions = recipeDatum.instructions,
      id =recipeDatum.id;

    return (
      <li key={id.toString()}>
        <Link to={`/recipes/${id}`}><span className="name">{name}</span></Link>
        <span className="image">{image}</span>
        <span className="description">
          <p>
            {instructions}{" "}
          </p>
        </span>
      </li>
    );
  }
}

