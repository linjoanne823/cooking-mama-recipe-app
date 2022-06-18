import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Recipes.css";
import ToggleLikeButton from "./ToggleLikeButton";
import ReadMore from "./ReadMore";

const Recipes = (props) => {
  return (
    <div>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipe">
          <ToggleLikeButton />
          <Link to={`/recipes/${recipe.id}`}>
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
              className="recipe__image"
            ></img>
            <div className="recipe__text-wrapper">
              <div className="recipe__title">{recipe.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
